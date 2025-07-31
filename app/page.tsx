import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import PricingCalculator from '../components/sections/PricingCalculator'
import FAQ from '../components/sections/FAQ'
import BlogSection from '../components/sections/BlogSection'
import ContactForm from '../components/sections/ContactForm'
import CallToAction from '../components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Revolutionize Your Marketing with AI',
  description: 'Transform your marketing strategy with our AI-powered suite. Automate campaigns, analyze performance, and boost ROI by 300%. Trusted by 15,000+ marketers worldwide.',
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Revolution',
    description: 'Automate campaigns, analyze performance, and boost ROI by 300% with AI-powered marketing tools.',
    url: 'https://admybrand.com',
    images: [
      {
        url: 'https://admybrand.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite Dashboard',
      }
    ],
  },
  twitter: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Revolution',
    description: 'Transform your marketing with AI. Automate campaigns and boost ROI by 300%.',
    images: ['https://admybrand.com/twitter-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="pricing">
        <Pricing />
        <PricingCalculator />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <section id="blog">
        <BlogSection />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
      
      <CallToAction />
    </>
  )
}
