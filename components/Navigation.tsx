'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              AzLock
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Features
            </a>
            <a href="#qa-system" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Q&A System
            </a>
            <a href="#use-cases" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Use Cases
            </a>
            <button className={`px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-blue-50'
            }`}>
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-primary-600">Features</a>
            <a href="#qa-system" className="block text-gray-700 hover:text-primary-600">Q&A System</a>
            <a href="#use-cases" className="block text-gray-700 hover:text-primary-600">Use Cases</a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
