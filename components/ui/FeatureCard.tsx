import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {/* Main Card with enhanced modern styling */}
      <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03]">
        
        {/* Subtle inner glow */}
        <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Enhanced gradient glow on hover */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-200/40 via-purple-200/40 to-blue-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"></div>
        
        {/* Modern 3D-style icon container */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-slate-50/90 via-white/90 to-blue-50/90 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            {/* 3D highlight effect */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/80 to-transparent opacity-70"></div>
            <div className="text-slate-700 relative z-10 filter drop-shadow-sm group-hover:text-violet-600 transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Title with high contrast modern typography */}
        <h3 className="relative z-10 text-xl font-black text-slate-900 mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-500 tracking-tight">
          {title}
        </h3>
        
        {/* Description with improved readability */}
        <p className="relative z-10 text-sm text-slate-600 text-center leading-relaxed font-medium">
          {description}
        </p>
        
        {/* Animated accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full group-hover:w-20 transition-all duration-700"></div>
      </div>
    </div>
  )
}
