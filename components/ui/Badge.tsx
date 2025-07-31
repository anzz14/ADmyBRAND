import React, { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full transition-all duration-300'
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    error: 'bg-red-100 text-red-800 hover:bg-red-200',
    glass: 'glassmorphism text-purple-800 hover:bg-white/20'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  const finalClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <span className={finalClasses}>
      {children}
    </span>
  )
}
