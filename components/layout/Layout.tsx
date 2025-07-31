import React, { ReactNode, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Fixed at top */}
      <Suspense fallback={<></>}>
        <Header />
      </Suspense>

      {/* Main Content - Grows to fill space */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer - Always at bottom */}
      <Footer />
    </div>
  )
}
