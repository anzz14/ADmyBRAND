'use client'

import React, { useState, useEffect } from 'react'
import Button from './Button'

interface AIAnalysisModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  companySize: string
}

const AIAnalysisModal: React.FC<AIAnalysisModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companySize: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Company size is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success - close modal and show success message
      onClose()
      
      // Reset form
      setFormData({ name: '', email: '', companySize: '' })
      setErrors({})
      
      // You could add a success toast here
      console.log('AI Analysis request submitted:', formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md transform transition-all duration-300 ease-out ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="glassmorphism-strong rounded-3xl p-8 shadow-2xl border border-white/20 bg-white/95 backdrop-blur-xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-200 group border border-gray-200 hover:border-gray-300"
          >
            <svg 
              className="w-4 h-4 text-gray-500 group-hover:text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="typography-headline text-2xl font-bold text-gray-900 mb-2">Start Your Free AI Analysis</h3>
            <p className="text-gray-600">Get personalized insights for your business in minutes</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 transition-all duration-200 placeholder-transparent peer focus:outline-none shadow-sm ${
                  errors.name 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-purple-500'
                }`}
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  formData.name || errors.name
                    ? '-top-2 text-xs bg-white px-2 rounded'
                    : 'top-3 text-gray-500'
                } ${
                  errors.name ? 'text-red-500' : 'text-gray-700 peer-focus:text-purple-600 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:rounded'
                }`}
              >
                Your Name
              </label>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 transition-all duration-200 placeholder-transparent peer focus:outline-none shadow-sm ${
                  errors.email 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-purple-500'
                }`}
                placeholder="your@email.com"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  formData.email || errors.email
                    ? '-top-2 text-xs bg-white px-2 rounded'
                    : 'top-3 text-gray-500'
                } ${
                  errors.email ? 'text-red-500' : 'text-gray-700 peer-focus:text-purple-600 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:rounded'
                }`}
              >
                Email Address
              </label>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Company Size Field */}
            <div className="relative">
              <select
                id="companySize"
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 transition-all duration-200 focus:outline-none appearance-none shadow-sm ${
                  errors.companySize 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-purple-500'
                }`}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
              <label
                htmlFor="companySize"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  formData.companySize || errors.companySize
                    ? '-top-2 text-xs bg-white px-2 rounded'
                    : 'top-3 text-gray-500'
                } ${
                  errors.companySize ? 'text-red-500' : 'text-gray-700'
                }`}
              >
                Company Size
              </label>
              <svg 
                className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {errors.companySize && (
                <p className="mt-1 text-xs text-red-500">{errors.companySize}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get My Analysis
                </div>
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAnalysisModal
