'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqs: FAQItem[] = [
    {
      question: "How does ADmyBRAND AI Suite improve my marketing ROI?",
      answer: "Our AI algorithms analyze your historical data, current market trends, and customer behavior to optimize campaigns in real-time. Most clients see a 300% ROI increase within the first 90 days through better targeting, automated optimization, and predictive insights that prevent budget waste."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Yes! ADmyBRAND seamlessly integrates with 200+ platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and more. Our API-first approach ensures smooth data flow between all your marketing tools."
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer: "Not at all! ADmyBRAND is designed for marketers, not developers. Our intuitive interface guides you through setup, and our AI handles the complex optimizations automatically. Plus, you get 24/7 support and free onboarding assistance."
    },
    {
      question: "What's included in the free trial?",
      answer: "Your 14-day free trial includes full access to all features: AI campaign optimization, audience targeting, content generation, analytics dashboard, and integrations. No credit card required, and you can upgrade or cancel anytime."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mr-2">❓</span>
            Frequently Asked Questions
          </div>
          
          <h2 
            className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Got{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              Questions?
            </span>
          </h2>
          
          <p 
            className="typography-body text-xl lg:text-2xl text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openItems[index]
            
            return (
              <div 
                key={index}
                className="glassmorphism rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={400 + index * 100}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left bg-transparent hover:bg-white/10 focus:outline-none focus:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="typography-headline text-lg font-bold text-gray-900 pr-4 group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}>
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="typography-body text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="glassmorphism rounded-3xl p-8 inline-block">
            <h3 className="typography-headline text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="typography-body text-gray-600 mb-6">
              Our team is here to help you succeed with AI marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-purple-300 hover:border-purple-400 text-purple-600 hover:text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
