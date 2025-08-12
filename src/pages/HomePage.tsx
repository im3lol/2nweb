import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // TODO: Add animations back when animejs is properly configured
    // Animate hero section
    // if (heroRef.current) {
    //   anime.timeline()
    //     .add({
    //       targets: '.hero-title',
    //       opacity: [0, 1],
    //       translateY: [30, 0],
    //       duration: 800,
    //       easing: 'easeOutCubic'
    //     })
    //     .add({
    //       targets: '.hero-subtitle',
    //       opacity: [0, 1],
    //       translateY: [30, 0],
    //       duration: 800,
    //       easing: 'easeOutCubic'
    //     }, '-=400')
    //     .add({
    //       targets: '.hero-cta',
    //       opacity: [0, 1],
    //       translateY: [30, 0],
    //       duration: 800,
    //       easing: 'easeOutCubic'
    //     }, '-=400')
    // }

    // Animate why section
    // if (whyRef.current) {
    //   anime({
    //     targets: '.why-card',
    //     opacity: [0, 1],
    //     translateY: [50, 0],
    //     duration: 800,
    //     delay: anime.stagger(200),
    //     easing: 'easeOutCubic'
    //   })
    // }

    // Animate process section
    // if (processRef.current) {
    //   anime({
    //     targets: '.process-step',
    //     opacity: [0, 1],
    //     translateX: [50, 0],
    //     duration: 800,
    //     delay: anime.stagger(200),
    //     easing: 'easeOutCubic'
    //   })
    // }
  }, [])

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Audit your market, data, and operations.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Offers, funnels, creative angles, and budgets.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Branding, content, Shopify, listings & A+ Content.'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Guardrails for ROAS and account health.'
    },
    {
      number: '05',
      title: 'Optimize',
      description: 'Creative tests, bid/audience tuning, CRO.'
    },
    {
      number: '06',
      title: 'Scale',
      description: 'Budgets up, channels added, new markets unlocked.'
    }
  ]

  const highlights = [
    {
      title: 'Performance-Obsessed',
      description: 'Structured testing, creative systems, and budget guardrails.'
    },
    {
      title: 'Brand-Led Craft',
      description: 'Distinctive identities and design systems that sell premium.'
    },
    {
      title: 'E-Commerce Native',
      description: 'Shopify builds, CRO, analytics, and server-side tracking.'
    },
    {
      title: 'Amazon Fluency',
      description: 'Listings, A+ Content, PPC, reviews, and inventory health.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>2N Business Management | Premium Marketing Agency & Amazon Account Management in Egypt & GCC</title>
        <meta name="description" content="2N Business Management builds brands, runs profitable ads, launches conversion-ready Shopify stores, and scales Amazon accounts across Egypt & the GCC." />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-balance mb-6">
              Strategy + Execution. Under One Roof.
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8 text-balance">
              Performance marketing, premium branding, conversion-focused Shopify, and full Amazon account management—delivered by a compact senior team.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg group"
              >
                Get a Growth Plan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/work"
                className="btn btn-secondary btn-lg"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why 2N Section */}
      <section ref={whyRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Two divisions. One growth mission.</h2>
            <p className="text-xl text-gray-600 text-balance">
              We combine a high-impact marketing agency with a specialized Amazon unit. One team shapes your brand, runs your ads, builds your store, and scales your marketplace revenue.
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {highlights.map((highlight, index) => (
               <div key={index} className="why-card p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                 <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                     <CheckCircle className="h-6 w-6 text-white" />
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                     <p className="text-gray-600">{highlight.description}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>

         {/* Partners Section - Moved here */}
         <div className="container-custom mt-20">
           <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="mb-6">Trusted by Leading Brands</h2>
             <p className="text-xl text-gray-600">
               We partner with innovative companies across Egypt, GCC, and beyond to drive growth and success.
             </p>
           </div>

           {/* Partners Ticker - Centered */}
           <div className="relative overflow-hidden py-12">
             
             {/* Top Row - Moving Right to Left */}
             <div className="relative mb-6">
               <div className="flex animate-scroll whitespace-nowrap">
                 <div className="flex items-center space-x-16 px-8">
                   <span className="brand-item text-2xl font-bold text-gray-800">GLOBED.EG</span>
                   <span className="brand-item text-2xl font-semibold text-gray-600">Telda.shop</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Tahoun Mart</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Bareeq.home</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">El watanya</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Al dawlya UAE</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Eagles For Trading</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Joovely USA</span>
                 </div>
                 <div className="flex items-center space-x-16 px-8">
                   <span className="brand-item text-2xl font-bold text-gray-800">GLOBED.EG</span>
                   <span className="brand-item text-2xl font-semibold text-gray-600">Telda.shop</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Tahoun Mart</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Bareeq.home</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">El watanya</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Al dawlya UAE</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Eagles For Trading</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Joovely USA</span>
                 </div>
               </div>
             </div>

             {/* Bottom Row - Moving Left to Right */}
             <div className="relative">
               <div className="flex animate-scroll-reverse whitespace-nowrap">
                 <div className="flex items-center space-x-16 px-8">
                   <span className="brand-item text-2xl font-bold text-gray-800">2N Store</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Al dawlya SA</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">Fawzy el banan</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Seller Samurai</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Silviny</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Grinpure</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">Noqta</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Ghosn</span>
                 </div>
                 <div className="flex items-center space-x-16 px-8">
                   <span className="brand-item text-2xl font-bold text-gray-800">2N Store</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Al dawlya SA</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">Fawzy el banan</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Seller Samurai</span>
                   <span className="brand-item text-2xl font-medium text-gray-500">Silviny</span>
                   <span className="brand-item text-2xl font-bold text-gray-800">Grinpure</span>
                   <span className="brand-item text-2xl font-semibold text-gray-700">Noqta</span>
                   <span className="brand-item text-2xl font-medium text-gray-600">Ghosn</span>
                 </div>
               </div>
             </div>
             
             {/* Fade edges */}
             <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
             <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
           </div>


         </div>
       </section>

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">From first call to first sale—then scale.</h2>
            <p className="text-xl text-gray-600">
              A clear 6-step process aligning brand, performance, Shopify, and Amazon for sustainable scale.
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {processSteps.map((step, index) => (
               <div key={index} className="process-step">
                 <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                   <div className="text-4xl font-bold text-gray-200 mb-4">{step.number}</div>
                   <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                   <p className="text-gray-600 flex-grow">{step.description}</p>
                 </div>
               </div>
             ))}
           </div>


        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Selected work.</h2>
            <p className="text-xl text-gray-600">
              Selected projects across electronics, jewelry, grocery, stationery, and gourmet F&B—branding, Shopify, content, and paid media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Globed',
                category: 'Electronics',
                description: 'Brand identity, visual system, Shopify store, performance-ready tracking.'
              },
              {
                title: 'Silviny',
                category: 'Silver Jewelry with Gemstones',
                description: 'Brand platform and premium identity, social system, Shopify build, product storytelling.'
              },
              {
                title: 'GrinPure',
                category: 'Grocery, Vitamins & Skincare',
                description: 'Brand refresh, content system, Shopify store, category storytelling for premium everyday essentials.'
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 aspect-[4/3] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm text-gray-500">View Case Study</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/work"
              className="btn btn-secondary btn-lg"
            >
              View Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to scale your business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your goals and create a custom growth plan that aligns with your vision.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-black hover:bg-gray-100 btn-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
