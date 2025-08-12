import { Helmet } from 'react-helmet-async'

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | 2N Business Management</title>
        <meta name="description" content="Terms of Service for 2N Business Management - Learn about the terms and conditions for using our website and services." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="mb-6">Terms of Service</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                By accessing this website, you agree to use it lawfully and not to scrape or copy content without permission. 
                Proposals and statements on this site are informational. All engagements are governed by a separate Services Agreement 
                defining scope, deliverables, payment terms, confidentiality, and IP ownership.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on 2N Business Management's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The materials on 2N Business Management's website are provided on an 'as is' basis. 2N Business Management makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Limitations</h2>
              <p className="text-gray-600 mb-6">
                In no event shall 2N Business Management or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on the website, even if 2N Business Management or 
                a 2N Business Management authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Accuracy of Materials</h2>
              <p className="text-gray-600 mb-6">
                The materials appearing on 2N Business Management's website could include technical, typographical, or photographic errors. 
                2N Business Management does not warrant that any of the materials on its website are accurate, complete, or current. 
                2N Business Management may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Links</h2>
              <p className="text-gray-600 mb-6">
                2N Business Management has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                The inclusion of any link does not imply endorsement by 2N Business Management of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Modifications</h2>
              <p className="text-gray-600 mb-6">
                2N Business Management may revise these terms of service for its website at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of Egypt and you irrevocably submit to the 
                exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Services Agreement</h2>
              <p className="text-gray-600 mb-6">
                All client engagements are governed by a separate Services Agreement that defines the specific scope of work, deliverables, 
                payment terms, confidentiality provisions, and intellectual property ownership. The terms of this website do not constitute 
                a binding agreement for services.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at hello@2nbusiness.com or use the contact form on our website.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsPage
