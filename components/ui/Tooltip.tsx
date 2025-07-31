import React, { ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export default function Tooltip({ 
  children, 
  content, 
  position = 'top',
  className = '' 
}: TooltipProps) {
  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  }

  const arrows = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900'
  }

  return (
    <div className={`relative inline-block group ${className}`}>
      {children}
      
      <div className={`
        absolute ${positions[position]} 
        bg-gray-900 text-white text-sm px-3 py-2 rounded-lg
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 
        pointer-events-none z-10
        whitespace-nowrap
      `}>
        {content}
        
        {/* Arrow */}
        <div className={`
          absolute ${arrows[position]}
          w-0 h-0 border-4
        `} />
      </div>
    </div>
  )
}
