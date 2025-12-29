'use client'

import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Q&A Beats Traditional Locks
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stop mindlessly typing PINs. Start engaging your brain with every unlock.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-red-300 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Traditional PIN Lock
            </h3>
            <ul className="space-y-4">
              {[
                "Mindless typing",
                "Easily forgotten",
                "Can be guessed",
                "Boring routine",
                "One-size-fits-all"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-red-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl transform md:scale-105">
            <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              AzLock Q&A System
            </h3>
            <ul className="space-y-4">
              {[
                "Engages your brain",
                "Knowledge-based, memorable",
                "Requires actual knowledge",
                "Learning experience",
                "Adaptive to user level"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-lg">✨ The world's first educational security system</span>
          </div>
        </div>
      </div>
    </section>
  )
}
