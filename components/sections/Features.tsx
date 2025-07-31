import React from 'react'
import FeatureCard from '../ui/FeatureCard'
import { 
  Bot, 
  Target, 
  BarChart3, 
  PenTool, 
  Link, 
  Zap, 
  Smartphone, 
  MessageCircle 
} from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Campaign Automation',
      description: 'Create, optimize, and manage multi-channel campaigns automatically. Our AI analyzes performance data to maximize ROI across all platforms.',
      color: 'from-violet-400/20 to-purple-400/20'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Smart Audience Targeting',
      description: 'Identify and target your ideal customers with predictive analytics. AI-driven segmentation increases conversion rates by 250%.',
      color: 'from-rose-400/20 to-pink-400/20'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-time Performance Analytics',
      description: 'Get instant insights with AI-powered dashboards that predict trends, identify opportunities, and prevent costly mistakes.',
      color: 'from-emerald-400/20 to-teal-400/20'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Content Generation & Optimization',
      description: 'Generate high-converting ad copy, email content, and social media posts. AI optimizes content for each platform automatically.',
      color: 'from-amber-400/20 to-orange-400/20'
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: 'Cross-Channel Attribution',
      description: 'Track customer journeys across all touchpoints. Understand which channels drive results and optimize budget allocation.',
      color: 'from-blue-400/20 to-indigo-400/20'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Marketing Automation Workflows',
      description: 'Build sophisticated automation sequences that nurture leads, re-engage customers, and drive conversions 24/7.',
      color: 'from-yellow-400/20 to-amber-400/20'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Social Media Intelligence',
      description: 'Monitor brand mentions, analyze sentiment, and discover viral content opportunities with AI-powered social listening.',
      color: 'from-cyan-400/20 to-sky-400/20'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'AI Chatbot & Customer Support',
      description: 'Deploy intelligent chatbots that qualify leads, answer questions, and provide 24/7 customer support with human-like responses.',
      color: 'from-fuchsia-400/20 to-purple-400/20'
    }
  ]

  return (
    <section id="features" className="py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden font-sans">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-200/40 to-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Header with High Contrast */}
        <div className="text-center mb-24">
          <div 
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl text-slate-700 text-sm font-medium mb-8 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
            AI-Powered Marketing Features
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full ml-3 animate-pulse"></div>
          </div>
          
          <h2 
            className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Dominate Marketing
            </span>
          </h2>
          
          <p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-normal"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our comprehensive AI suite provides all the tools you need to create, optimize, and scale your marketing campaigns across every channel.
          </p>
        </div>

        {/* Modern Features Grid with staggered animations */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="h-full"
              data-aos="fade-up"
              data-aos-delay={500 + index * 150}
              data-aos-duration="800"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* Modern Bottom CTA */}
        <div 
          className="text-center mt-24"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="relative inline-block">
            {/* Glassmorphic card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-200/30 via-blue-200/30 to-cyan-200/30 rounded-3xl blur-xl opacity-75"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  Ready to experience the future of marketing?
                </h3>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of marketers who&apos;ve already transformed their campaigns with AI
                </p>
                <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                  Start Free Trial
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
