'use client'

import React from 'react'
import { TrendingUp, Users, Star, Award } from 'lucide-react'

export default function Statistics() {
  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Grade Levels</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Subjects</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">∞</div>
            <div className="text-sm text-gray-600">Learning Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
