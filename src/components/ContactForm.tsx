import { useState } from 'react'
import { useAnalytics } from '../utils/analytics'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  fullName: string
  company: string
  email: string
  phone: string
  website: string
  adSpend: string
  services: string[]
  markets: string[]
  brief: string
}

interface FormErrors {
  [key: string]: string
}

const ContactForm = () => {
  const { trackFormSubmission, trackButtonClick } = useAnalytics()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    adSpend: '',
    services: [],
    markets: [],
    brief: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const adSpendOptions = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ]

  const serviceOptions = [
    'Performance & Media Buying',
    'Branding & Visual Identity',
    'Social Media Management',
    'Web & Shopify Development',
    'Content & UGC Production',
    'Amazon Account Management',
    'Full Stack Marketing'
  ]

  const marketOptions = [
    'Egypt',
    'Saudi Arabia',
    'UAE',
    'Kuwait',
    'Qatar',
    'Bahrain',
    'Oman',
    'Jordan',
    'Lebanon',
    'Other GCC'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.brief.trim()) {
      newErrors.brief = 'Please tell us about your goals'
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Website validation (optional but if provided, must be valid)
    if (formData.website.trim() && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL (include http:// or https://)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleServiceToggle = (service: string) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service]
    
    handleInputChange('services', newServices)
  }

  const handleMarketToggle = (market: string) => {
    const newMarkets = formData.markets.includes(market)
      ? formData.markets.filter(m => m !== market)
      : [...formData.markets, market]
    
    handleInputChange('markets', newMarkets)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    trackButtonClick('Submit Contact Form', 'contact_page')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Track form submission
      trackFormSubmission('contact_form', {
        services: formData.services,
        markets: formData.markets,
        adSpend: formData.adSpend
      })

      setIsSubmitted(true)
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        adSpend: '',
        services: [],
        markets: [],
        brief: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Thanks—your brief is in.</h3>
        <p className="text-gray-600 mb-6">We'll respond within one business day.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700">{errors.submit}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
              errors.fullName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company / Brand
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Your company or brand name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
              errors.phone ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="+1234567890"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
          Website / Store URL
        </label>
        <input
          type="url"
          id="website"
          value={formData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
            errors.website ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="https://yourwebsite.com"
        />
        {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Monthly Ad Spend
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {adSpendOptions.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="adSpend"
                value={option}
                checked={formData.adSpend === option}
                onChange={(e) => handleInputChange('adSpend', e.target.value)}
                className="mr-2"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Services Needed
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceToggle(service)}
                className="mr-2"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Markets
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {marketOptions.map((market) => (
            <label key={market} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.markets.includes(market)}
                onChange={() => handleMarketToggle(market)}
                className="mr-2"
              />
              <span className="text-sm">{market}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="brief" className="block text-sm font-medium text-gray-700 mb-2">
          Brief / Goals *
        </label>
        <textarea
          id="brief"
          rows={4}
          value={formData.brief}
          onChange={(e) => handleInputChange('brief', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
            errors.brief ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Tell us about your business, goals, and what you're looking to achieve..."
        />
        {errors.brief && <p className="text-red-500 text-sm mt-1">{errors.brief}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get My Plan
            </>
          )}
        </button>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick('WhatsApp Chat', 'contact_page')}
          className="btn btn-secondary btn-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </form>
  )
}

export default ContactForm
