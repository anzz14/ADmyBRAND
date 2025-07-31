'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  avatar: string
  rating: number
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials: Testimonial[] = [
    {
      quote: "ADmyBRAND AI Suite completely revolutionized our marketing strategy. Our conversion rates increased by 340% and we're saving 20+ hours per week on campaign optimization.",
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      quote: "The AI-powered insights are incredible. We can predict customer behavior and optimize campaigns before our competitors even know what's happening. ROI increased 280% in 3 months.",
      name: "Michael Rodriguez",
      title: "CEO",
      company: "StartupForge",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      quote: "Finally, marketing automation that actually works! The AI content generation alone saves us $50K annually, and the targeting accuracy is phenomenal.",
      name: "Emma Thompson",
      title: "Head of Growth",
      company: "GrowthLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      quote: "ADmyBRAND's cross-channel attribution showed us which campaigns actually drive revenue. We reallocated budget and saw a 400% improvement in ROAS within 60 days.",
      name: "David Park",
      title: "Performance Marketing Manager",
      company: "EcomScale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      quote: "The predictive analytics warned us about customer churn before it happened. We retained 85% of at-risk customers and increased lifetime value by 45%.",
      name: "Lisa Wang",
      title: "VP of Marketing",
      company: "RetailPro",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    },
    {
      quote: "Implementation was seamless and results were immediate. Our marketing team feels like they have superpowers now. Can't imagine going back to manual optimization.",
      name: "James Wilson",
      title: "Marketing Operations",
      company: "CloudVenture",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mr-2">⭐</span>
            Customer Success Stories
          </div>
          
          <h2 
            className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted by{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              15,000+ Marketers
            </span>
          </h2>
          
          <p 
            className="typography-body text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join thousands of marketing professionals who&apos;ve transformed their campaigns and boosted ROI with our AI-powered platform.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="glassmorphism rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            
            {/* Main Testimonial */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentSlide].rating)}
              </div>
              
              <blockquote className="typography-body text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentSlide].quote}&rdquo;
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg">
                  <Image 
                    src={testimonials[currentSlide].avatar} 
                    alt={testimonials[currentSlide].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="typography-headline font-bold text-gray-900">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="typography-body text-gray-600">
                    {testimonials[currentSlide].title}
                  </div>
                  <div className="typography-body text-purple-600 font-semibold">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/50 hover:bg-white/80 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/50 hover:bg-white/80 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-4xl font-black text-purple-600 mb-2">15,000+</div>
            <div className="typography-body text-gray-600">Active Users</div>
          </div>
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-4xl font-black text-blue-600 mb-2">340%</div>
            <div className="typography-body text-gray-600">Avg. ROI Increase</div>
          </div>
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-4xl font-black text-teal-600 mb-2">50M+</div>
            <div className="typography-body text-gray-600">Campaigns Optimized</div>
          </div>
          <div className="text-center glassmorphism rounded-2xl p-6">
            <div className="text-4xl font-black text-purple-600 mb-2">4.9/5</div>
            <div className="typography-body text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
