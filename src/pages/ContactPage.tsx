import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SchemaMarkup from '../components/SchemaMarkup'

const ContactPage = () => {

  return (
    <>
      <Helmet>
        <title>Contact | 2N Business Management</title>
        <meta name="description" content="Tell us about your goals and we'll map a clear plan for your brand across marketing and Amazon." />
      </Helmet>
      
      <SchemaMarkup 
        type="organization" 
        data={{}} 
      />

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="mb-6">Tell us what you're building.</h1>
              <p className="text-xl text-gray-600">
                Share your goals and we'll create a custom growth plan that aligns with your vision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">hello@2nbusiness.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">+20 123 456 7890</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Cairo, Egypt</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-4">Quick chat</h3>
                  <p className="text-gray-600 mb-4">
                    Prefer to chat? We're available on WhatsApp for quick questions.
                  </p>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 btn btn-secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-4">Response time</h3>
                  <p className="text-gray-600">
                    We typically respond within one business day. For urgent matters, please use WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
