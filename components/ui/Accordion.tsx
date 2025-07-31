'use client'

import React, { useState, ReactNode } from 'react'

interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean> | number | null>(
    allowMultiple ? {} : null
  )

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => ({
        ...(prev as Record<number, boolean>),
        [index]: !(prev as Record<number, boolean>)[index]
      }))
    } else {
      setOpenItems(prev => prev === index ? null : index)
    }
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = allowMultiple 
          ? (openItems as Record<number, boolean>)[index] 
          : openItems === index
        
        return (
          <div 
            key={index}
            className="glassmorphism rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-transparent hover:bg-white/10 focus:outline-none focus:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="typography-headline text-lg font-bold text-gray-900 pr-4">
                  {item.title}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="typography-body text-gray-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
