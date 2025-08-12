import { Helmet } from 'react-helmet-async'

interface SchemaMarkupProps {
  type: 'organization' | 'website' | 'breadcrumb' | 'article'
  data: any
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "2N Business Management",
          "url": "https://2n-business.com",
          "logo": "https://2n-business.com/favicon.svg",
          "description": "Premium marketing agency and Amazon account management services in Egypt and GCC",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "EG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@2n-business.com"
          },
          "sameAs": [
            "https://linkedin.com/company/2n-business",
            "https://facebook.com/2n-business"
          ]
        }
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "2N Business Management",
          "url": "https://2n-business.com",
          "description": "Premium marketing agency and Amazon account management services",
          "publisher": {
            "@type": "Organization",
            "name": "2N Business Management"
          }
        }
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "2N Business Management"
          },
          "publisher": {
            "@type": "Organization",
            "name": "2N Business Management",
            "logo": {
              "@type": "ImageObject",
              "url": "https://2n-business.com/favicon.svg"
            }
          },
          "datePublished": data.publishedDate,
          "dateModified": data.modifiedDate || data.publishedDate
        }
      
      default:
        return {}
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  )
}

export default SchemaMarkup
