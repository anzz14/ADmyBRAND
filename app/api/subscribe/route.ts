import { NextRequest, NextResponse } from 'next/server'

// Email validation regex
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

interface SubscribeRequestBody {
  email: string
}

// Simulate a database or external service
// In production, replace this with your actual database/CRM integration
const saveEmailToDatabase = async (email: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Simulate random failure for testing (disabled for debugging)
  // if (Math.random() < 0.1) {
  //   throw new Error('Database connection failed')
  // }
  
  // In production, save to your database:
  // await db.subscribers.create({ email, createdAt: new Date() })
  // or send to your email marketing service:
  // await mailchimp.lists.addMember(listId, { email_address: email })
  
  console.log(`📧 New subscription: ${email}`)
  return true
}

export async function POST(request: NextRequest) {
  console.log('📨 API route called: /api/subscribe')
  
  try {
    // Parse request body
    const body: SubscribeRequestBody = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      console.log('❌ Missing email in request')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email is required',
          details: 'Please provide an email address'
        },
        { status: 400 }
      )
    }

    if (!emailRegex.test(email)) {
      console.log(`❌ Invalid email format: ${email}`)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format',
          details: 'Please provide a valid email address'
        },
        { status: 400 }
      )
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim()
    console.log(`📝 Processing subscription for: ${normalizedEmail}`)

    // Save to database/service
    await saveEmailToDatabase(normalizedEmail)

    // Send success response
    console.log(`✅ Successfully subscribed: ${normalizedEmail}`)
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: {
        email: normalizedEmail,
        subscribedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('💥 API Error:', error)
    
    // Handle specific error types
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid request format',
          details: 'Please send valid JSON'
        },
        { status: 400 }
      )
    }

    // Generic server error
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: 'Please try again later'
      },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for health checks)
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Newsletter subscription API is running',
    endpoints: {
      POST: '/api/subscribe - Subscribe to newsletter'
    }
  })
}
