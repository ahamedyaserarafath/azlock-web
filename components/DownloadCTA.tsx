'use client'

import React from 'react'
import { Download, Smartphone, Shield, Star } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          <span className="text-sm font-medium">Join Families Making Screen Time Educational</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Learn While You Lock?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Download AzLock today and transform every app unlock into a learning opportunity. 100% free, 100% offline, 100% educational.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-xl text-lg">
            <Download className="w-6 h-6" />
            Download for Android
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-lg">
            View on GitHub
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Smartphone className="w-12 h-12 mb-3 text-blue-200" />
            <h3 className="font-semibold mb-2">Only 13MB</h3>
            <p className="text-sm text-blue-100">Lightweight and fast</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 mb-3 text-blue-200" />
            <h3 className="font-semibold mb-2">100% Private</h3>
            <p className="text-sm text-blue-100">No data collection</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Star className="w-12 h-12 mb-3 text-blue-200" />
            <h3 className="font-semibold mb-2">Always Free</h3>
            <p className="text-sm text-blue-100">No subscriptions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
