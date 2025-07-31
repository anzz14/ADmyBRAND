'use client'

import React, { useState, InputHTMLAttributes, ChangeEvent } from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  className?: string
}

export default function Input({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = '',
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="typography-body text-sm font-semibold text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full px-4 py-3 rounded-xl border transition-all duration-300
            typography-body text-gray-900 placeholder-gray-500 bg-white
            focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500
            ${error 
              ? 'border-red-300 bg-red-50' 
              : focused 
                ? 'border-purple-300 bg-white shadow-lg' 
                : 'border-gray-300 bg-white hover:border-gray-400'
            }
          `}
          {...props}
        />
        
        {/* Focus ring effect */}
        {focused && !error && (
          <div className="absolute inset-0 rounded-xl border-2 border-purple-500/20 pointer-events-none" />
        )}
      </div>
      
      {error && (
        <p className="typography-body text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
