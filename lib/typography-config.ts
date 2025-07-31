// 2025 Typography Configuration for Tailwind CSS
// Use these utility classes in your components

export const typographyConfig = {
  // Font Families
  fontFamily: {
    sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    display: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-jetbrains-mono)', 'monospace'],
  },

  // Font Sizes with fluid scaling
  fontSize: {
    // Display Sizes (Hero, Landing Pages)
    'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
    'display-lg': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
    'display-md': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
    'display-sm': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
    
    // Heading Sizes
    'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
    'h2': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
    'h3': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
    'h4': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
    'h5': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
    'h6': ['1rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
    
    // Body Sizes
    'body-xl': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
    'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.65', letterSpacing: '0', fontWeight: '400' }],
    'body-md': ['1rem', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
    'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
    'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '400' }],
    
    // Special Purpose
    'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.03em', fontWeight: '500' }],
    'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
    'code': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
  },

  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Letter Spacing
  letterSpacing: {
    tightest: '-0.04em',
    tighter: '-0.03em',
    tight: '-0.025em',
    snug: '-0.02em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
    widest: '0.03em',
  },

  // Line Heights
  lineHeight: {
    tight: '0.95',
    snug: '1.0',
    normal: '1.15',
    relaxed: '1.3',
    loose: '1.6',
    spacious: '1.7',
  }
}

// Tailwind Utility Classes Reference
export const tailwindTypographyClasses = {
  // Display Typography (Use Poppins)
  heroTitle: 'font-display text-display-xl font-black text-gray-900 leading-tight tracking-tightest',
  heroSubtitle: 'font-display text-display-sm font-bold text-gray-700 leading-snug tracking-tight',
  
  // Section Headers (Use Poppins)
  sectionTitle: 'font-display text-h1 font-bold text-gray-900 leading-normal tracking-snug',
  sectionSubtitle: 'font-display text-h2 font-semibold text-gray-700 leading-relaxed tracking-tight',
  cardTitle: 'font-display text-h3 font-semibold text-gray-900 leading-relaxed',
  
  // Body Text (Use Inter)
  leadText: 'font-sans text-body-xl text-gray-600 leading-loose',
  bodyText: 'font-sans text-body-md text-gray-600 leading-spacious',
  smallText: 'font-sans text-body-sm text-gray-500 leading-loose tracking-wide',
  
  // Interactive Elements
  buttonText: 'font-sans text-body-md font-medium leading-normal',
  linkText: 'font-sans text-body-md font-medium text-blue-600 hover:text-blue-700',
  
  // Form Elements
  labelText: 'font-sans text-label font-medium text-gray-700 leading-relaxed tracking-wide',
  inputText: 'font-sans text-body-md text-gray-900 leading-relaxed',
  helpText: 'font-sans text-body-xs text-gray-500 leading-loose tracking-wider',
  
  // Navigation
  navLink: 'font-sans text-body-md font-medium text-gray-700 hover:text-gray-900',
  navCTA: 'font-sans text-body-md font-semibold text-white',
  
  // Special Effects
  gradientText: 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent',
  glowText: 'text-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]',
  
  // Code Typography (Use JetBrains Mono)
  codeBlock: 'font-mono text-code text-gray-800 leading-loose bg-gray-100 p-4 rounded-lg',
  codeInline: 'font-mono text-code text-purple-600 bg-purple-50 px-2 py-1 rounded',
}

// Responsive Typography Breakpoints
export const responsiveTypography = {
  // Mobile First Approach
  mobile: {
    heroTitle: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
    sectionTitle: 'text-2xl sm:text-3xl lg:text-4xl',
    bodyText: 'text-base sm:text-lg',
  },
  
  // Tablet Adjustments
  tablet: {
    heroTitle: 'md:text-6xl md:leading-tight',
    sectionTitle: 'md:text-4xl md:leading-normal',
    bodyText: 'md:text-lg md:leading-relaxed',
  },
  
  // Desktop Enhancements
  desktop: {
    heroTitle: 'lg:text-7xl lg:leading-tight lg:tracking-tightest',
    sectionTitle: 'lg:text-5xl lg:leading-snug',
    bodyText: 'lg:text-xl lg:leading-spacious',
  }
}

// Usage Examples
export const usageExamples = {
  // Hero Section
  heroExample: `
<h1 className="typography-display-xl font-display text-gray-900 mb-6">
  Revolutionize Your Marketing with AI
</h1>
<p className="typography-body-xl font-sans text-gray-600 mb-8">
  Transform your marketing strategy with intelligent automation
</p>
  `,
  
  // Card Component
  cardExample: `
<div className="space-y-4">
  <h3 className="typography-h3 font-display text-gray-900">
    AI Campaign Optimization
  </h3>
  <p className="typography-body-md font-sans text-gray-600">
    Automatically optimize your campaigns for maximum ROI
  </p>
</div>
  `,
  
  // Form Component
  formExample: `
<div className="space-y-2">
  <label className="typography-label font-sans text-gray-700">
    Email Address
  </label>
  <input className="typography-body-md font-sans text-gray-900" />
  <p className="typography-body-xs font-sans text-gray-500">
    We'll never share your email with anyone else.
  </p>
</div>
  `
}

export default typographyConfig
