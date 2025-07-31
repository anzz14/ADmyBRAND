'use client'

import React, { useState, useEffect } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Input from '../ui/Input'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  jobTitle: string
  teamSize: string
  industry: string
  interests: string[]
  budget: string
  timeline: string
  message: string
  marketing: boolean
}

interface FormErrors {
  [key: string]: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    teamSize: '',
    industry: '',
    interests: [],
    budget: '',
    timeline: '',
    message: '',
    marketing: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
    'Manufacturing', 'Real Estate', 'Consulting', 'Marketing Agency', 'Other'
  ]

  const teamSizes = [
    '1-10 employees', '11-50 employees', '51-200 employees', 
    '201-1000 employees', '1000+ employees'
  ]

  const budgetRanges = [
    'Under $5,000', '$5,000 - $15,000', '$15,000 - $50,000', 
    '$50,000 - $100,000', '$100,000+'
  ]

  const timelines = [
    'Immediately', 'Within 1 month', 'Within 3 months', 
    'Within 6 months', 'Just exploring'
  ]

  const interestOptions = [
    'Marketing Automation', 'Analytics & Reporting', 'Lead Generation',
    'Social Media Management', 'Email Marketing', 'Content Creation',
    'SEO & SEM', 'Customer Segmentation', 'A/B Testing', 'Integration Support'
  ]

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.company.trim()) newErrors.company = 'Company is required'
    }

    if (step === 2) {
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
      if (!formData.teamSize) newErrors.teamSize = 'Team size is required'
      if (!formData.industry) newErrors.industry = 'Industry is required'
    }

    if (step === 3) {
      if (formData.interests.length === 0) {
        newErrors.interests = 'Please select at least one area of interest'
      }
      if (!formData.budget) newErrors.budget = 'Budget range is required'
      if (!formData.timeline) newErrors.timeline = 'Timeline is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleInterestToggle = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest]
    
    handleInputChange('interests', newInterests)
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
    }
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(3)) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setCurrentStep(4)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '', lastName: '', email: '', company: '', phone: '',
      jobTitle: '', teamSize: '', industry: '', interests: [], budget: '',
      timeline: '', message: '', marketing: false
    })
    setErrors({})
    setIsSubmitted(false)
    setCurrentStep(1)
  }

  const progressPercentage = (currentStep / 3) * 100

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;ve received your information and will contact you within 24 hours.
            </p>
            <p className="text-gray-600 mb-8">
              Our team is reviewing your requirements and will prepare a customized demo 
              showcasing how ADmyBRAND AI Suite can transform your marketing strategy.
            </p>
            <div className="space-y-4">
              <Button onClick={resetForm} size="lg">
                Submit Another Request
              </Button>
              <p className="text-sm text-gray-500">
                Check your email for a confirmation and calendar link to schedule your demo.
              </p>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Personalized Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your business and we&apos;ll show you exactly how ADmyBRAND AI Suite 
            can boost your marketing ROI by 300%.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      error={errors.firstName}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      error={errors.lastName}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="Business Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    label="Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    error={errors.company}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Company Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      label="Job Title"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      error={errors.jobTitle}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 ${
                        errors.teamSize ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    {errors.teamSize && <p className="mt-1 text-sm text-red-600">{errors.teamSize}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 ${
                      errors.industry ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select your industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Requirements & Message */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Requirements</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 text-sm rounded-xl border-2 transition-all ${
                          formData.interests.includes(interest)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  {errors.interests && <p className="mt-1 text-sm text-red-600">{errors.interests}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 ${
                        errors.budget ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 ${
                        errors.timeline ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                    {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    placeholder="Tell us more about your marketing challenges and goals..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={formData.marketing}
                    onChange={(e) => handleInputChange('marketing', e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="marketing" className="text-sm text-gray-600">
                    I agree to receive marketing communications from ADmyBRAND. 
                    You can unsubscribe at any time.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200">
              <div>
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                  >
                    Previous
                  </Button>
                )}
              </div>
              <div>
                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Demo'}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">
            🔒 Your information is secure and will never be shared with third parties.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>✓ Free consultation</span>
            <span>✓ No obligations</span>
            <span>✓ 24-hour response</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
