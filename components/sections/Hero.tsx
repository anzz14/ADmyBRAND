'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Button from '../ui/Button'
import AIAnalysisModal from '../ui/AIAnalysisModal'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface HeroProps {
  mediaType?: 'video' | 'lottie' | 'dashboard'
  videoUrl?: string
  lottieData?: any
  autoPlay?: boolean
}

export default function Hero({ 
  mediaType = 'dashboard',
  videoUrl = '',
  lottieData = null,
  autoPlay = true 
}: HeroProps) {
  const [isClient, setIsClient] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const renderMedia = () => {
    switch (mediaType) {
      case 'video':
        return (
          <div className="relative glassmorphism-strong rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black/10 backdrop-blur-sm">
              {videoUrl && (
                <iframe
                  src={videoUrl}
                  className="w-full h-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Product Demo Video"
                />
              )}
            </div>
            {/* Video overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 pointer-events-none rounded-3xl"></div>
          </div>
        )
      
      case 'lottie':
        return (
          <div className="relative glassmorphism-strong rounded-3xl p-8 shadow-2xl">
            <div className="aspect-square bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              {isClient && lottieData && (
                <Lottie
                  animationData={lottieData}
                  autoplay={autoPlay}
                  loop={true}
                  className="w-full h-full max-w-md"
                />
              )}
            </div>
            {/* Lottie overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 pointer-events-none rounded-3xl"></div>
          </div>
        )
      
      default: // dashboard
        return (
          <div className="relative glassmorphism-strong rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-8">
              {/* AI Dashboard Mockup */}
              <div 
                className="h-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="space-y-4">
                  {/* Header with AI Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded w-32"></div>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                        AI Active
                      </span>
                    </div>
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* AI Performance Chart */}
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-end justify-between p-4 border border-blue-100">
                    <div className="w-6 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t animate-pulse" style={{height: '60%'}}></div>
                    <div className="w-6 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t animate-pulse" style={{height: '80%', animationDelay: '0.2s'}}></div>
                    <div className="w-6 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t animate-pulse" style={{height: '40%', animationDelay: '0.4s'}}></div>
                    <div className="w-6 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t animate-pulse" style={{height: '90%', animationDelay: '0.6s'}}></div>
                    <div className="w-6 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t animate-pulse" style={{height: '70%', animationDelay: '0.8s'}}></div>
                    <div className="w-6 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t animate-pulse" style={{height: '95%', animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* AI Insights */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glassmorphism rounded-lg p-3 border border-white/20">
                      <div className="h-2 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 bg-gradient-to-r from-green-400 to-green-500 rounded w-12"></div>
                        <span className="text-xs text-green-600 font-semibold">+300%</span>
                      </div>
                    </div>
                    <div className="glassmorphism rounded-lg p-3 border border-white/20">
                      <div className="h-2 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 bg-gradient-to-r from-blue-400 to-blue-500 rounded w-16"></div>
                        <span className="text-xs text-blue-600 font-semibold">15K</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Recommendations */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dashboard overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 pointer-events-none rounded-3xl"></div>
          </div>
        )
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 overflow-hidden">
      {/* One soft, colorful blurred accent for depth */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-purple-200/40 via-blue-200/30 to-cyan-100/0 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-20 gap-12 lg:gap-16">
          
          {/* Enhanced Content Column */}
          <div className="flex-1 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0">
            
            {/* Enhanced Badge */}
            <div 
              className="inline-flex items-center px-6 py-3 rounded-full glassmorphism-strong text-purple-800 text-sm font-semibold mb-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="mr-2 animate-bounce">🤖</span>
              New: AI-Powered Campaign Automation
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Main Headline */}
            <h1 
              className="typography-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Revolutionize Your
              <span 
                className="block gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Marketing with AI
              </span>
              <span 
                className="block text-gray-700"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                That Actually Works
              </span>
            </h1>
            
            {/* Enhanced Subheading */}
            <p 
              className="typography-body text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              ADmyBRAND AI Suite transforms your marketing strategy with intelligent automation, predictive analytics, and personalized campaigns that <span className="font-semibold text-purple-600">boost ROI by 300%</span>. Trusted by <span className="font-semibold text-blue-600">15,000+ marketers</span> worldwide.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Button 
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 pulse-glow border-0"
              >
                <span className="flex items-center">
                  Start Free AI Analysis
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button 
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto glassmorphism-strong border border-white/20 text-gray-700 hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo (2 min)
                </span>
              </Button>
            </div>
            
            {/* Enhanced Social Proof */}
            <div 
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <p className="text-sm text-gray-500 font-medium">
                Powering marketing teams at leading companies
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60">
                {['HubSpot', 'Mailchimp', 'Salesforce', 'Slack', 'Shopify'].map((company, index) => (
                  <div 
                    key={company}
                    className="h-8 px-4 glassmorphism rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600 border border-white/10"
                    data-aos="fade-up"
                    data-aos-delay={800 + (index * 50)}
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Enhanced Visual Column */}
          <div 
            className="flex-1 max-w-lg lg:max-w-xl xl:max-w-2xl"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative">
              {/* Main Media Container with a soft glow behind */}
              <div className="absolute -inset-8 z-0 pointer-events-none">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-purple-300/30 via-blue-200/20 to-cyan-100/0 blur-2xl opacity-60"></div>
              </div>
              <div className="relative z-10">{renderMedia()}</div>
              {/* Floating Stats */}
              <div 
                className="absolute -top-4 right-4 glassmorphism-strong rounded-2xl p-4 border border-white/20 shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+300%</div>
                  <div className="text-xs text-gray-600">ROI Increase</div>
                </div>
              </div>
              <div 
                className="absolute bottom-4 -left-4 glassmorphism-strong rounded-2xl p-4 border border-white/20 shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15K+</div>
                  <div className="text-xs text-gray-600">Active Users</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* AI Analysis Modal */}
      <AIAnalysisModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      {/* Remove heavy gray bottom fade for a cleaner look */}
    </section>
  )
}
