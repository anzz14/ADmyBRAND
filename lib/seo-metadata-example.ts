// ADmyBRAND AI Suite - Comprehensive SEO metadata template
// Use this as a template for any page in your application

import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Basic metadata
  title: 'ADmyBRAND AI Suite - Revolutionize Your Marketing with AI',
  description: 'Transform your marketing strategy with AI-powered automation. Boost ROI by 300%, automate campaigns, and analyze performance. Trusted by 15,000+ marketers worldwide.',
  
  // Keywords for AI-powered marketing platform
  keywords: [
    'AI marketing automation',
    'marketing analytics',
    'campaign optimization',
    'AI-powered advertising',
    'marketing ROI',
    'customer insights',
    'social media intelligence',
    'predictive analytics',
    'cross-channel attribution',
    'SaaS marketing platform'
  ],
  
  // Author and publisher information
  authors: [{ name: 'ADmyBRAND Team', url: 'https://admybrand.com/team' }],
  creator: 'ADmyBRAND AI Suite',
  publisher: 'ADmyBRAND Inc.',
  
  // Canonical URL (important for SEO)
  alternates: {
    canonical: 'https://admybrand.com',
    languages: {
      'en-US': 'https://admybrand.com',
      'es-ES': 'https://admybrand.com/es',
    },
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand.com',
    siteName: 'ADmyBRAND AI Suite',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Automation',
    description: 'Transform your marketing strategy with AI. Boost ROI by 300%, automate campaigns, and get predictive customer insights.',
    images: [
      {
        url: 'https://admybrand.com/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite - AI-Powered Marketing Platform Dashboard',
        type: 'image/jpeg',
      },
      {
        url: 'https://admybrand.com/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'ADmyBRAND AI Suite Logo',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@ADmyBRAND',
    creator: '@ADmyBRAND',
    title: 'ADmyBRAND AI Suite - Boost Your Marketing ROI by 300%',
    description: 'AI-powered marketing automation platform trusted by 15,000+ marketers. Automate campaigns, analyze performance, and scale your business.',
    images: ['https://admybrand.com/twitter-card-image.jpg'],
  },
  
  // Additional verification and app metadata
  verification: {
    google: 'ADmyBRAND-google-verification-code',
    yandex: 'ADmyBRAND-yandex-verification-code',
    yahoo: 'ADmyBRAND-yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'ADmyBRAND-facebook-verification-code',
    },
  },
  
  // App-specific metadata
  applicationName: 'ADmyBRAND AI Suite',
  referrer: 'origin-when-cross-origin',
  category: 'business',
  classification: 'AI Marketing Software',
  
  // Additional structured data hints
  other: {
    'application-name': 'ADmyBRAND AI Suite',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ADmyBRAND',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#2563eb',
  },
}

// TypeScript interface for structured data
export interface StructuredData {
  "@context": string
  "@type": string
  name: string
  description: string
  url: string
  mainEntity: {
    "@type": string
    name: string
    applicationCategory: string
    operatingSystem: string
    description: string
    url: string
    publisher: {
      "@type": string
      name: string
      url: string
      logo: string
    }
    offers: Array<{
      "@type": string
      name: string
      category: string
      priceSpecification: {
        "@type": string
        price: string
        priceCurrency: string
        billingDuration: string
      }
    }>
    aggregateRating: {
      "@type": string
      ratingValue: string
      ratingCount: string
      bestRating: string
      worstRating: string
    }
  }
  breadcrumb: {
    "@type": string
    itemListElement: Array<{
      "@type": string
      position: number
      name: string
      item: string
    }>
  }
}

// ADmyBRAND AI Suite structured data for rich snippets
export const structuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
  "description": "Transform your marketing strategy with AI-powered automation. Boost ROI by 300%, automate campaigns, and analyze performance.",
  "url": "https://admybrand.com",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "ADmyBRAND AI Suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered marketing automation platform that helps businesses optimize campaigns, analyze performance, and boost ROI by 300%.",
    "url": "https://admybrand.com",
    "publisher": {
      "@type": "Organization",
      "name": "ADmyBRAND Inc.",
      "url": "https://admybrand.com",
      "logo": "https://admybrand.com/logo.png"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "category": "SaaS",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "99.00",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "category": "SaaS",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "299.00",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://admybrand.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Marketing Platform",
        "item": "https://admybrand.com"
      }
    ]
  }
}

// How to use structured data in your ADmyBRAND page components:
/*
export default function YourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div>
        Your ADmyBRAND page content here...
      </div>
    </>
  )
}
*/
