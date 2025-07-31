'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

interface PlanFeature {
  id: string
  name: string
  description: string
  included: boolean
  price: number
}

interface CalculatorState {
  plan: 'starter' | 'professional' | 'enterprise'
  users: number
  addons: string[]
}

const PricingCalculator: React.FC = () => {
  const [calculator, setCalculator] = useState<CalculatorState>({
    plan: 'professional',
    users: 10,
    addons: []
  })

  const plans = {
    starter: {
      name: 'Starter',
      basePrice: 49,
      pricePerUser: 5,
      maxUsers: 25
    },
    professional: {
      name: 'Professional',
      basePrice: 149,
      pricePerUser: 12,
      maxUsers: 100
    },
    enterprise: {
      name: 'Enterprise',
      basePrice: 499,
      pricePerUser: 25,
      maxUsers: 1000
    }
  }

  const addons: PlanFeature[] = [
    {
      id: 'analytics',
      name: 'Advanced Analytics',
      description: 'Deep insights and custom reports',
      included: false,
      price: 99
    },
    {
      id: 'automation',
      name: 'Marketing Automation',
      description: 'Automated campaigns and workflows',
      included: false,
      price: 149
    },
    {
      id: 'api',
      name: 'API Access',
      description: 'Full API access and integrations',
      included: false,
      price: 199
    },
    {
      id: 'support',
      name: 'Priority Support',
      description: '24/7 dedicated support channel',
      included: false,
      price: 299
    }
  ]

  const calculateTotal = (): number => {
    const selectedPlan = plans[calculator.plan]
    const basePrice = selectedPlan.basePrice
    const userPrice = calculator.users * selectedPlan.pricePerUser
    const addonPrice = calculator.addons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId)
      return total + (addon?.price || 0)
    }, 0)
    
    return basePrice + userPrice + addonPrice
  }

  const handlePlanChange = (plan: 'starter' | 'professional' | 'enterprise') => {
    setCalculator(prev => ({
      ...prev,
      plan,
      users: Math.min(prev.users, plans[plan].maxUsers)
    }))
  }

  const handleUserChange = (users: number) => {
    const maxUsers = plans[calculator.plan].maxUsers
    setCalculator(prev => ({
      ...prev,
      users: Math.min(Math.max(1, users), maxUsers)
    }))
  }

  const handleAddonToggle = (addonId: string) => {
    setCalculator(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(id => id !== addonId)
        : [...prev.addons, addonId]
    }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
          >
            <span className="mr-2">💰</span>
            Pricing Calculator
          </div>
          
          <h2 className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
            Calculate Your{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              Perfect Plan
            </span>
          </h2>
          
          <p className="typography-body text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Customize your plan and see exactly what you&apos;ll pay. No hidden fees, no surprises.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            💡 Enterprise plans and high-volume pricing include custom quote options
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Controls */}
          <div className="space-y-8">
            {/* Plan Selection */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h3>
              <div className="grid gap-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => handlePlanChange(key as 'starter' | 'professional' | 'enterprise')}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      calculator.plan === key
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-blue-50 ring-2 ring-purple-200'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                        <p className="text-sm text-gray-600">
                          ${plan.basePrice}/month + ${plan.pricePerUser}/user
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Up to {plan.maxUsers} users</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* User Count */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Number of Users</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max={plans[calculator.plan].maxUsers}
                    value={calculator.users}
                    onChange={(e) => handleUserChange(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-right min-w-[80px]">
                    <span className="text-2xl font-bold text-purple-600">{calculator.users}</span>
                    <p className="text-sm text-gray-500">users</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 user</span>
                  <span>{plans[calculator.plan].maxUsers} users</span>
                </div>
              </div>
            </Card>

            {/* Add-ons */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-ons</h3>
              <div className="space-y-4">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      calculator.addons.includes(addon.id)
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-blue-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => handleAddonToggle(addon.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={calculator.addons.includes(addon.id)}
                            onChange={() => handleAddonToggle(addon.id)}
                            className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                            <p className="text-sm text-gray-600">{addon.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-semibold text-gray-900">${addon.price}</span>
                        <p className="text-sm text-gray-500">/month</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Price Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="glassmorphism rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
              <h3 className="typography-headline text-2xl font-bold mb-8 text-gray-900">Your Custom Quote</h3>
              
              <div className="space-y-6">
                {/* Plan Cost */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900">{plans[calculator.plan].name} Plan</p>
                    <p className="text-sm text-gray-600">Base price</p>
                  </div>
                  <span className="font-semibold text-gray-900">${plans[calculator.plan].basePrice}</span>
                </div>

                {/* User Cost */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-semibold text-gray-900">{calculator.users} Users</p>
                    <p className="text-sm text-gray-600">${plans[calculator.plan].pricePerUser} per user</p>
                  </div>
                  <span className="font-semibold text-gray-900">${calculator.users * plans[calculator.plan].pricePerUser}</span>
                </div>

                {/* Add-ons */}
                {calculator.addons.length > 0 && (
                  <div className="space-y-3">
                    {calculator.addons.map((addonId) => {
                      const addon = addons.find(a => a.id === addonId)
                      if (!addon) return null
                      
                      return (
                        <div key={addonId} className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-900">{addon.name}</p>
                            <p className="text-sm text-gray-600">Add-on</p>
                          </div>
                          <span className="font-semibold text-gray-900">${addon.price}</span>
                        </div>
                      )
                    })}
                    <div className="border-b border-gray-200 pb-4"></div>
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${calculateTotal()}/month</span>
                </div>

                {/* High Volume Discount Notice */}
                {calculateTotal() > 2000 && (
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <svg className="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span className="text-sm font-semibold text-yellow-800">Volume Discount Available</span>
                    </div>
                    <p className="text-xs text-yellow-700">
                      Save up to 30% with our volume pricing - Contact us for a custom quote
                    </p>
                  </div>
                )}

                {/* Annual Savings */}
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 text-center border border-purple-200">
                  <p className="text-sm text-purple-700 mb-1">Annual billing saves 20%</p>
                  <p className="font-semibold text-purple-800">${Math.round(calculateTotal() * 12 * 0.8)}/year</p>
                  <p className="text-xs text-purple-600">Save ${Math.round(calculateTotal() * 12 * 0.2)} annually</p>
                </div>

                {/* Custom Pricing Note */}
                {(calculator.plan === 'enterprise' || calculateTotal() > 1000) && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 text-center border border-purple-200">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-purple-800">Custom Pricing Available</span>
                    </div>
                    <p className="text-xs text-purple-700">
                      {calculator.plan === 'enterprise' 
                        ? 'Enterprise plans include volume discounts and custom features'
                        : 'Volume discounts available for large teams'
                      }
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-4">
                  {/* Custom Quote Button - Show for enterprise plan or high pricing */}
                  {(calculator.plan === 'enterprise' || calculateTotal() > 1000) && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 font-semibold"
                      onClick={() => {
                        // Create quote summary for contact form
                        const quoteData = {
                          plan: calculator.plan,
                          users: calculator.users,
                          addons: calculator.addons,
                          total: calculateTotal()
                        }
                        
                        // Store quote data in sessionStorage for the contact form
                        sessionStorage.setItem('quoteData', JSON.stringify(quoteData))
                        
                        // Scroll to contact section
                        const contactSection = document.getElementById('contact')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Get Custom Quote
                    </Button>
                  )}
                </div>

                <p className="text-center text-sm text-gray-600">
                  14-day free trial • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator
