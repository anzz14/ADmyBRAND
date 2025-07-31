import React from 'react'
import Image from 'next/image'

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fallback?: string
  className?: string
  status?: 'online' | 'away' | 'busy' | 'offline'
  ring?: boolean
}

export default function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  fallback,
  className = '',
  status,
  ring = false
}: AvatarProps) {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  }
  
  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }

  const ringClasses = ring ? 'ring-4 ring-white shadow-lg' : ''
  
  const statusColors = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
    offline: 'bg-gray-400'
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`
        ${sizes[size]} 
        ${ringClasses}
        rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 
        flex items-center justify-center
      `}>
        {src ? (
          <Image 
            src={src} 
            alt={alt || ''} 
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`${textSizes[size]} font-semibold text-purple-600`}>
            {fallback || '?'}
          </span>
        )}
      </div>
      
      {status && (
        <div className={`
          absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
          ${statusColors[status]}
        `} />
      )}
    </div>
  )
}
