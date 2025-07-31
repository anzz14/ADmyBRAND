'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'

export default function CallToAction() {
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Debug logging
    console.log('Form submitted with email:', email)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setMessage(data.message || 'Thank you for subscribing!')
        setIsSuccess(true)
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('Network error. Please check your connection and try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (message) {
      setMessage('')
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mr-2">🚀</span>
            Start Your AI Marketing Journey Today
          </div>

          {/* Main Headline */}
          <h2 
            className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ready to{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              Transform
            </span>
            <br />
            Your Marketing?
          </h2>

          {/* Subtitle */}
          <p 
            className="typography-body text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join thousands of marketers who&apos;ve boosted their ROI by 300% with our AI-powered platform. 
            Start your free trial today and experience the future of marketing.
          </p>

          {/* Enhanced Newsletter Form */}
          <div 
            className="max-w-md mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="glassmorphism rounded-3xl p-8 shadow-2xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email for early access"
                    required
                    disabled={isLoading}
                    className="w-full px-6 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Get Early Access'
                  )}
                </button>
              </form>

              {/* Message Display */}
              {message && (
                <div 
                  className={`mt-4 p-4 rounded-xl ${
                    isSuccess 
                      ? 'bg-green-100 border border-green-200 text-green-800' 
                      : 'bg-red-100 border border-red-200 text-red-800'
                  } transition-all duration-300`}
                  data-aos="fade-up"
                >
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="text-center glassmorphism rounded-2xl p-6">
              <div className="text-4xl font-black text-purple-600 mb-2">15,000+</div>
              <div className="typography-body text-gray-600">Active Users</div>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-6">
              <div className="text-4xl font-black text-blue-600 mb-2">300%</div>
              <div className="typography-body text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center glassmorphism rounded-2xl p-6">
              <div className="text-4xl font-black text-teal-600 mb-2">50M+</div>
              <div className="typography-body text-gray-600">Campaigns Optimized</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Free Trial
                <svg className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="group px-8 py-4 bg-transparent border-2 border-purple-300 hover:border-purple-400 text-purple-600 hover:text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300">
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Schedule Demo
              </button>
            </div>
            
            <p className="text-gray-600 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 pt-16 border-t border-gray-200"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-gray-600 text-sm mb-8">Trusted by leading brands worldwide</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="glassmorphism rounded-lg p-4 text-purple-600 font-semibold">Microsoft</div>
              <div className="glassmorphism rounded-lg p-4 text-purple-600 font-semibold">Amazon</div>
              <div className="glassmorphism rounded-lg p-4 text-purple-600 font-semibold">Shopify</div>
              <div className="glassmorphism rounded-lg p-4 text-purple-600 font-semibold">HubSpot</div>
              <div className="glassmorphism rounded-lg p-4 text-purple-600 font-semibold">Salesforce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
