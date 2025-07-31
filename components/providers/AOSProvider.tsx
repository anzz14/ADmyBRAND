'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface AOSProviderProps {
  children: React.ReactNode
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    })
  }, [])

  return <>{children}</>
}

export default AOSProvider
