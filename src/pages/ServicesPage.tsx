import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Palette, 
  Share2, 
  Globe, 
  Camera, 
  ShoppingCart,
  Package,
  FileText,
  Target,
  Star,
  Truck,
  Warehouse,
  Shield
} from 'lucide-react'

const ServicesPage = () => {
  const marketingServices = [
    {
      icon: TrendingUp,
      title: 'Performance & Media Buying',
      description: 'Paid ads across social media platforms and search engines such as Facebook, TikTok, Snapchat, and Google.',
      features: [
        'Creative testing and campaign optimization',
        'Scaling strategies to maximize ROAS',
        'Ongoing testing and analysis',
        'Budget management and guardrails'
      ]
    },
    {
      icon: Palette,
      title: 'Branding & Visual Identity',
      description: 'Crafting distinctive brand identities that drive long-term success.',
      features: [
        'Logo design and brand guidelines',
        'Color schemes and typography',
        'Customized brand strategies',
        'Value propositions and messaging'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Creating comprehensive content calendars and engaging social media presence.',
      features: [
        'Content calendar development',
        'Brand-aligned post design',
        'Performance analysis and insights',
        'Community engagement strategies'
      ]
    },
    {
      icon: Globe,
      title: 'Web & Shopify Development',
      description: 'Building custom Shopify stores ready for conversion and optimization.',
      features: [
        'Custom Shopify store development',
        'CRO optimization strategies',
        'GA4 and GTM implementation',
        'Speed and performance optimization'
      ]
    },
    {
      icon: Camera,
      title: 'Content & UGC Production',
      description: 'Sourcing influencers and creating content that reflects your brand.',
      features: [
        'Influencer and creator sourcing',
        'Ad copy and campaign writing',
        'Native content creation',
        'Brand-aligned storytelling'
      ]
    }
  ]

  const amazonServices = [
    {
      icon: ShoppingCart,
      title: 'Full Management',
      description: 'Complete account management on Amazon, including initial setup and optimization.',
      features: [
        'Account setup and optimization',
        'Strategic guidance and advice',
        'Growth strategy development',
        'Performance monitoring'
      ]
    },
    {
      icon: Camera,
      title: 'Imaging (Photo-shoot Services)',
      description: 'Professional product photography with tabletop and model photoshoots.',
      features: [
        'Professional product photography',
        'Lifestyle and detail shots',
        'Interactive, high-quality images',
        'Amazon listing optimization'
      ]
    },
    {
      icon: FileText,
      title: 'Cataloging (ASIN Creation)',
      description: 'Assistance with creating new product listings on Amazon.',
      features: [
        'New product listing creation',
        'Title and keyword optimization',
        'Engaging content development',
        'Conversion rate optimization'
      ]
    },
    {
      icon: Target,
      title: 'Advertising Optimization',
      description: 'Optimizing PPC campaigns on Amazon for maximum ROAS.',
      features: [
        'PPC campaign optimization',
        'Keyword strategy development',
        'Daily bid monitoring',
        'Performance analysis'
      ]
    },
    {
      icon: Star,
      title: 'A+ Cataloging (Enhanced Brand Content)',
      description: 'Creating A+ Content for product detail pages.',
      features: [
        'A+ Content creation',
        'Image and text optimization',
        'Engagement enhancement',
        'Conversion improvement'
      ]
    },
    {
      icon: Package,
      title: 'FBA Preparation',
      description: 'Labeling, packaging, and quality checks for Amazon FBA.',
      features: [
        'Product labeling and packaging',
        'Quality control checks',
        'SIOC compliance',
        'FBA preparation services'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Returns',
      description: 'Managing shipments and returns for all Amazon orders.',
      features: [
        'Order shipment management',
        'Return process handling',
        'Customer experience enhancement',
        'Account health maintenance'
      ]
    },
    {
      icon: Warehouse,
      title: 'Storage (Warehousing Services)',
      description: 'Providing storage solutions for Amazon sellers.',
      features: [
        'Inventory management',
        'Stock forecasting',
        'Multi-location expansion',
        'Demand fulfillment'
      ]
    },
    {
      icon: Shield,
      title: 'IP Accelerator',
      description: 'Assisting with trademark registration and IP protection.',
      features: [
        'Trademark registration support',
        'IP protection on Amazon',
        'Brand credibility enhancement',
        'Legal compliance assistance'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Services | 2N Business Management</title>
        <meta name="description" content="Explore our services in paid media, branding, social media management, Shopify development, content & UGC production, and Amazon account management." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="mb-6">Services Designed for Measurable Outcomes.</h1>
            <p className="text-xl text-gray-600">
              Select the full stack or plug in a single capability. We tailor scope to your goals, timeline, and market.
            </p>
          </div>

          {/* Marketing Agency Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="mb-4">Marketing Agency Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive marketing solutions to build your brand and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Amazon Account Management */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="mb-4">Amazon Account Management</h2>
              <p className="text-lg text-gray-600">
                Specialized services to optimize and scale your Amazon business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amazonServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black text-white rounded-2xl p-12 text-center">
            <h2 className="mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom service package that aligns with your business goals.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-black hover:bg-gray-100 btn-lg"
            >
              Get Your Custom Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
