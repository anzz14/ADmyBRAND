import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout/Layout";
import AOSProvider from "../components/providers/AOSProvider";

// 2025 Typography System: Inter + Poppins + JetBrains Mono
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://admybrand.com'),
  title: {
    default: 'ADmyBRAND AI Suite - Revolutionize Your Marketing with AI',
    template: '%s | ADmyBRAND AI Suite'
  },
  description: 'Transform your marketing strategy with intelligent automation, predictive analytics, and personalized campaigns that boost ROI by 300%. Trusted by 15,000+ marketing teams worldwide.',
  keywords: [
    'AI marketing',
    'marketing automation',
    'predictive analytics',
    'campaign optimization',
    'marketing intelligence',
    'automated campaigns',
    'marketing ROI',
    'customer analytics',
    'marketing platform',
    'digital marketing AI',
    'marketing suite',
    'AI-powered marketing'
  ],
  authors: [{ name: 'ADmyBRAND Team' }],
  creator: 'ADmyBRAND',
  publisher: 'ADmyBRAND',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand.com',
    title: 'ADmyBRAND AI Suite - Revolutionize Your Marketing with AI',
    description: 'Transform your marketing strategy with intelligent automation and boost ROI by 300%. Trusted by 15,000+ marketing teams.',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: 'https://admybrand.com/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite - Marketing Intelligence Dashboard',
      },
      {
        url: 'https://admybrand.com/og-image-features.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Powered Marketing Features',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ADmyBRAND',
    creator: '@ADmyBRAND',
    title: 'ADmyBRAND AI Suite - Revolutionize Your Marketing with AI',
    description: 'Transform your marketing strategy with intelligent automation and boost ROI by 300%.',
    images: ['https://admybrand.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://admybrand.com',
  },
  category: 'technology',
  classification: 'Marketing Technology',
  referrer: 'origin-when-cross-origin',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  appleWebApp: {
    capable: true,
    title: 'ADmyBRAND AI Suite',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  itunes: {
    appId: 'your-app-id',
    appArgument: 'your-app-argument',
  },
  abstract: 'AI-powered marketing automation platform for modern businesses',
  applicationName: 'ADmyBRAND AI Suite',
  appLinks: {
    web: {
      url: 'https://admybrand.com',
      should_fallback: true,
    },
  },
  archives: ['https://admybrand.com/archive'],
  assets: ['https://admybrand.com/assets'],
  bookmarks: ['https://admybrand.com/bookmarks'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Performance */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ADmyBRAND AI" />
        
        {/* PWA */}
        <meta name="application-name" content="ADmyBRAND AI Suite" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ADmyBRAND",
              "url": "https://admybrand.com",
              "logo": "https://admybrand.com/logo.png",
              "description": "AI-powered marketing automation platform",
              "sameAs": [
                "https://twitter.com/ADmyBRAND",
                "https://linkedin.com/company/admybrand",
                "https://facebook.com/ADmyBRAND"
              ]
            })
          }}
        />
        
        {/* Structured Data - Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ADmyBRAND AI Suite",
              "operatingSystem": "Web",
              "applicationCategory": "Marketing Technology",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free trial available"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2847"
              }
            })
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-inter antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <AOSProvider>
          <Layout>
            <main role="main">
              {children}
            </main>
          </Layout>
        </AOSProvider>
      </body>
    </html>
  )
}
