import React from 'react'
import Button from '../ui/Button'

interface PricingFeature {
  name: string
  included: boolean
}

interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: PricingFeature[]
  popular?: boolean
  cta: string
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: 49,
      description: 'Perfect for small businesses and startups',
      features: [
        { name: 'AI Campaign Creation', included: true },
        { name: 'Basic Analytics Dashboard', included: true },
        { name: 'Email Marketing Automation', included: true },
        { name: 'Social Media Scheduling', included: true },
        { name: 'Up to 1,000 contacts', included: true },
        { name: 'Basic AI Content Generation', included: true },
        { name: 'Standard Support', included: true },
        { name: 'Advanced Attribution', included: false },
        { name: 'Custom Integrations', included: false },
        { name: 'Priority Support', included: false }
      ],
      cta: 'Start Free Trial'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 149,
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        { name: 'Everything in Starter', included: true },
        { name: 'Advanced AI Optimization', included: true },
        { name: 'Multi-channel Attribution', included: true },
        { name: 'A/B Testing Suite', included: true },
        { name: 'Up to 10,000 contacts', included: true },
        { name: 'Advanced Content AI', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'Predictive Analytics', included: true },
        { name: 'White-label Reports', included: false }
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 499,
      description: 'For large organizations and agencies',
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'Unlimited contacts', included: true },
        { name: 'Advanced AI Models', included: true },
        { name: 'Custom AI Training', included: true },
        { name: 'White-label Solutions', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'Advanced Security', included: true },
        { name: '24/7 Premium Support', included: true }
      ],
      cta: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mr-2">💰</span>
            Simple, Transparent Pricing
          </div>
          
          <h2 
            className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Invest in AI That{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              Pays for Itself
            </span>
          </h2>
          
          <p 
            className="typography-body text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Choose the perfect plan for your marketing goals. Most clients see 300%+ ROI within 90 days.
          </p>
          
          {/* Billing Toggle */}
          <div 
            className="inline-flex items-center glassmorphism rounded-xl p-1 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Yearly (Save 20%)
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative glassmorphism rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                plan.popular ? 'border-2 border-purple-300 scale-105' : 'border border-white/20'
              }`}
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="typography-headline text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="typography-body text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      feature.included 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {feature.included ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`typography-body ${
                      feature.included ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className={`w-full justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl' 
                    : ''
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="typography-headline text-2xl font-bold text-gray-900 mb-4">
              All plans include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
