import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient' | 'dark'
  hover?: boolean
  glass?: boolean
  padding?: 'none' | 'sm' | 'default' | 'lg' | 'xl'
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  glass = false,
  padding = 'default'
}: CardProps) {
  const baseClasses = 'rounded-xl border transition-all duration-300'
  
  const variants = {
    default: 'bg-white border-gray-200 shadow-sm',
    glass: 'glassmorphism border-white/20',
    gradient: 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100',
    dark: 'bg-gray-900 border-gray-800 text-white'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
  const glassClasses = glass ? 'glassmorphism' : ''
  
  const finalClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${paddingClasses[padding]} 
    ${hoverClasses} 
    ${glassClasses} 
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={finalClasses}>
      {children}
    </div>
  )
}
