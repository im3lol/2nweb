import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'

const WorkPage = () => {
  const projects = [
    {
      title: 'Globed',
      category: 'Electronics',
      description: 'Brand identity, visual system, Shopify store, performance-ready tracking.',
      services: ['Branding', 'Shopify Development', 'Performance Marketing'],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Silviny',
      category: 'Silver Jewelry with Gemstones',
      description: 'Brand platform and premium identity, social system, Shopify build, product storytelling.',
      services: ['Branding', 'Social Media', 'Shopify Development', 'Content'],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'GrinPure',
      category: 'Grocery, Vitamins & Skincare',
      description: 'Brand refresh, content system, Shopify store, category storytelling for premium everyday essentials.',
      services: ['Brand Refresh', 'Content Strategy', 'Shopify Development'],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Noqta',
      category: 'Stationery',
      description: 'Identity system, packaging directions, Shopify store optimized for repeat purchase.',
      services: ['Branding', 'Packaging Design', 'Shopify Development'],
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      title: 'Ghosn',
      category: 'Olive Oil',
      description: 'Gourmet brand identity, product imagery art direction, Shopify with subscription-ready architecture.',
      services: ['Branding', 'Product Photography', 'Shopify Development'],
      image: '/api/placeholder/600/400',
      link: '#'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Portfolio | 2N Business Management</title>
        <meta name="description" content="Selected projects across electronics, jewelry, grocery, stationery, and gourmet F&B—branding, Shopify, content, and paid media." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="mb-6">Selected work.</h1>
            <p className="text-xl text-gray-600">
              Selected projects across electronics, jewelry, grocery, stationery, and gourmet F&B—branding, Shopify, content, and paid media.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-100 aspect-[4/3] rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm text-gray-500">View Case Study</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{project.category}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-black font-medium hover:underline group/link"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">Media buying offered to selected partners</h3>
              <p className="text-gray-600 mb-6">
                Our team is built to deliver strong ROAS on proven SKUs. We work with a select group of partners who have established products and are ready to scale their advertising efforts.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Discuss Partnership
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-black text-white rounded-2xl p-12 text-center">
            <h2 className="mb-6">Ready to join our portfolio?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve similar results.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-black hover:bg-gray-100 btn-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkPage
