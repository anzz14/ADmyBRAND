'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Avatar from '../ui/Avatar'

interface Author {
  name: string
  avatar: string
  role: string
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: Author
  image: string
  featured?: boolean
  tags: string[]
}

interface Category {
  id: string
  name: string
  count: number
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories: Category[] = [
    { id: 'all', name: 'All Posts', count: 6 },
    { id: 'ai-marketing', name: 'AI Marketing', count: 3 },
    { id: 'automation', name: 'Automation', count: 1 },
    { id: 'analytics', name: 'Analytics', count: 1 },
    { id: 'case-studies', name: 'Case Studies', count: 1 }
  ]

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "How AI-Powered Predictive Analytics Increased Our Client's ROI by 340%",
      excerpt: "Discover the exact strategies and AI tools that helped a mid-size e-commerce company transform their marketing performance in just 90 days.",
      category: 'case-studies',
      readTime: '8 min read',
      publishDate: '2025-01-15',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Head of AI Strategy'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=80',
      featured: true,
      tags: ['AI', 'ROI', 'E-commerce', 'Predictive Analytics']
    },
    {
      id: 2,
      title: "The Ultimate Guide to AI Marketing Automation in 2025",
      excerpt: "Everything you need to know about implementing AI-driven marketing automation, from basic workflows to advanced predictive campaigns.",
      category: 'ai-marketing',
      readTime: '12 min read',
      publishDate: '2025-01-12',
      author: {
        name: 'Michael Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Marketing Automation Expert'
      },
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&auto=format&q=80',
      featured: true,
      tags: ['Automation', 'AI', 'Marketing', 'Guide']
    },
    {
      id: 3,
      title: "Cross-Channel Attribution: The Missing Piece in Your Marketing Stack",
      excerpt: "Learn how proper attribution modeling can reveal the true performance of your campaigns and optimize budget allocation across channels.",
      category: 'analytics',
      readTime: '6 min read',
      publishDate: '2025-01-10',
      author: {
        name: 'Emma Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Analytics Director'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=80',
      featured: false,
      tags: ['Attribution', 'Analytics', 'Multi-channel']
    },
    {
      id: 4,
      title: "5 AI Content Generation Strategies That Boost Engagement by 200%",
      excerpt: "Practical techniques for using AI to create compelling content that resonates with your audience and drives meaningful engagement.",
      category: 'ai-marketing',
      readTime: '7 min read',
      publishDate: '2025-01-08',
      author: {
        name: 'David Park',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Content Strategy Lead'
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=80',
      featured: false,
      tags: ['Content', 'AI', 'Engagement', 'Strategy']
    },
    {
      id: 5,
      title: "Building Your First AI Marketing Workflow: A Step-by-Step Tutorial",
      excerpt: "Complete walkthrough of creating an automated marketing workflow that nurtures leads and drives conversions using AI decision-making.",
      category: 'automation',
      readTime: '10 min read',
      publishDate: '2025-01-05',
      author: {
        name: 'Lisa Wang',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Automation Specialist'
      },
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop&auto=format&q=80',
      featured: false,
      tags: ['Workflow', 'Tutorial', 'Automation', 'Lead Nurturing']
    },
    {
      id: 6,
      title: "The Future of Marketing: 2025 AI Trends Every Marketer Should Know",
      excerpt: "Stay ahead of the curve with insights into emerging AI technologies that will reshape marketing in the coming year.",
      category: 'ai-marketing',
      readTime: '9 min read',
      publishDate: '2025-01-02',
      author: {
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format&q=80',
        role: 'Marketing Futurist'
      },
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop&auto=format&q=80',
      featured: false,
      tags: ['Trends', 'Future', 'AI', 'Innovation']
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full glassmorphism text-purple-800 text-sm font-semibold mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mr-2">📚</span>
            AI Marketing Insights
          </div>
          
          <h2 
            className="typography-headline text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Learn from{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
              AI Experts
            </span>
          </h2>
          
          <p 
            className="typography-body text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Stay ahead with cutting-edge AI marketing strategies, case studies, and insights from industry leaders.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'glassmorphism text-gray-700 hover:text-purple-600 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Posts (First 2 posts, full width on large screens) */}
          {filteredPosts.slice(0, 2).map((post, index) => (
            <div
              key={post.id}
              className="lg:col-span-2"
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
            >
              <Card glass hover className="h-full group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary" size="sm">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="glass" size="sm">
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="typography-headline text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="typography-body text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Avatar 
                        src={post.author.avatar}
                        alt={post.author.name} 
                        size="sm"
                      />
                      <div>
                        <div className="typography-body font-semibold text-gray-900 text-sm">
                          {post.author.name}
                        </div>
                        <div className="typography-body text-gray-500 text-xs">
                          {post.author.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
          
          {/* Regular Posts */}
          {filteredPosts.slice(2).map((post, index) => (
            <div
              key={post.id}
              className="lg:col-span-1"
              data-aos="fade-up"
              data-aos-delay={700 + index * 100}
            >
              <Card glass hover className="h-full group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-purple-100 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="glass" size="sm">
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="typography-headline text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="typography-body text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Avatar 
                        src={post.author.avatar}
                        alt={post.author.name} 
                        size="xs"
                      />
                      <div>
                        <div className="typography-body font-semibold text-gray-900 text-xs">
                          {post.author.name}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="glassmorphism rounded-3xl p-8 inline-block">
            <h3 className="typography-headline text-2xl font-bold text-gray-900 mb-4">
              Want more AI marketing insights?
            </h3>
            <p className="typography-body text-gray-600 mb-6">
              Subscribe to our newsletter for weekly tips and strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
