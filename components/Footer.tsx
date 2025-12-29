'use client'

import React from 'react'
import { Github, Mail, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">AzLock</h3>
            <p className="text-sm text-gray-400">
              The world's first educational app lock. Learn while you secure your apps.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#qa-system" className="hover:text-white transition-colors">Q&A System</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 AzLock. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
