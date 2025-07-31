import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-white">ADmyBRAND</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The world&apos;s leading AI-powered marketing suite. Transform your campaigns with intelligent automation, predictive analytics, and data-driven insights that deliver measurable growth.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/admybrand" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com/company/admybrand" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://facebook.com/admybrand" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://youtube.com/admybrand" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Platform Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="hover:text-white transition-colors">AI Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/api" className="hover:text-white transition-colors">Developer API</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security & Compliance</Link></li>
              <li><Link href="/updates" className="hover:text-white transition-colors">Product Updates</Link></li>
            </ul>
          </div>
          
          {/* Solutions Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="/agencies" className="hover:text-white transition-colors">Agencies</Link></li>
              <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="/small-business" className="hover:text-white transition-colors">Small Business</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="hover:text-white transition-colors">Marketing Blog</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">AI Marketing Guides</Link></li>
              <li><Link href="/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition-colors">About ADmyBRAND</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press Kit</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-white text-xl font-bold mb-2">Stay ahead of the marketing curve</h3>
              <p className="text-blue-100">Get AI marketing insights, tips, and updates delivered weekly.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-medium rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </div>
            
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                GDPR Compliance
              </Link>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  )
}
