// ADmyBRAND AI Suite Pricing Data
export interface PricingPlan {
  id: string
  name: string
  price: number | string
  billingPeriod: string | null
  description: string
  featured: boolean
  badge?: string
  features: string[]
  bonusFeatures?: string[]
  enterpriseFeatures?: string[]
  limitations?: string[]
  ctaText: string
  ctaVariant: 'primary' | 'secondary' | 'outline'
}

export interface AdditionalInfo {
  trialPeriod: string
  billingOptions: string[]
  yearlyDiscount: number
  currency: string
  taxNote: string
  features: {
    moneyBackGuarantee: string
    freeSupport: string
    noSetupFees: string
  }
}

export interface PricingData {
  plans: PricingPlan[]
  additionalInfo: AdditionalInfo
}

export const pricingPlans: PricingData = {
  "plans": [
    {
      "id": "starter",
      "name": "Starter",
      "price": 99,
      "billingPeriod": "month",
      "description": "Perfect for small businesses and solo marketers getting started with AI",
      "featured": false,
      "features": [
        "AI Campaign Optimization",
        "Smart Audience Targeting",
        "Basic Content Generation", 
        "Real-time Analytics Dashboard",
        "Email & Chat Support",
        "Up to 3 connected ad accounts"
      ],
      "limitations": [
        "Limited to $10K monthly ad spend",
        "Basic AI features only"
      ],
      "ctaText": "Start Free Trial",
      "ctaVariant": "secondary"
    },
    {
      "id": "professional",
      "name": "Professional",
      "price": 299,
      "billingPeriod": "month",
      "description": "Best for growing marketing teams who need advanced AI capabilities",
      "featured": true,
      "badge": "Most Popular",
      "features": [
        "All Starter features",
        "Advanced AI Content Generation",
        "Cross-Channel Attribution",
        "Marketing Automation Workflows",
        "Predictive Customer Insights",
        "Social Media Intelligence",
        "Priority Support & Dedicated Success Manager"
      ],
      "bonusFeatures": [
        "API access",
        "Custom AI model training",
        "Advanced security & compliance",
        "Up to 10 connected ad accounts"
      ],
      "ctaText": "Start Free Trial",
      "ctaVariant": "primary"
    },
    {
      "id": "enterprise",
      "name": "Enterprise",
      "price": "Custom",
      "billingPeriod": null,
      "description": "For agencies and large enterprises with unlimited scale requirements",
      "featured": false,
      "features": [
        "All Professional features",
        "Unlimited ad accounts & team members",
        "Custom AI model development",
        "White-label solutions",
        "Enterprise-grade security & compliance",
        "Dedicated account manager & training"
      ],
      "enterpriseFeatures": [
        "Custom SLA agreements",
        "On-premise deployment options",
        "Advanced reporting & analytics",
        "24/7 priority phone support",
        "Custom integrations & API limits"
      ],
      "ctaText": "Contact Sales",
      "ctaVariant": "outline"
    }
  ],
  "additionalInfo": {
    "trialPeriod": "14 days",
    "billingOptions": ["monthly", "yearly"],
    "yearlyDiscount": 20,
    "currency": "USD",
    "taxNote": "All prices exclude applicable taxes",
    "features": {
      "moneyBackGuarantee": "30-day money-back guarantee",
      "freeSupport": "Free migration assistance",
      "noSetupFees": "No setup or cancellation fees"
    }
  }
}
