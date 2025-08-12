import { Helmet } from 'react-helmet-async'

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | 2N Business Management</title>
        <meta name="description" content="Privacy Policy for 2N Business Management - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="mb-6">Privacy Policy</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                We collect information you submit via our forms to respond to your inquiry and deliver services. 
                We use analytics and advertising pixels to improve the site and our marketing. 
                We do not sell personal data. To request access or deletion, contact us via the form on the Contact page. 
                By using this site, you consent to this policy.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Fill out our contact forms</li>
                <li>Request a quote or proposal</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for a job</li>
                <li>Engage with our services</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our services and fulfill our contractual obligations</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or would like to exercise your rights, 
                please contact us using the form on our Contact page or email us at hello@2nbusiness.com.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-6">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
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

export default PrivacyPage
