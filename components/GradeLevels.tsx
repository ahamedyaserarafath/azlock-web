'use client'

import React from 'react'
import { Baby, Smile, BookOpen, GraduationCap, Brain, Trophy, User } from 'lucide-react'

const gradeLevels = [
  { icon: Baby, level: "Pre-KG", description: "Shapes, colors, counting", color: "from-pink-400 to-pink-600" },
  { icon: Smile, level: "KG", description: "Simple addition, objects", color: "from-purple-400 to-purple-600" },
  { icon: BookOpen, level: "Grade 1-2", description: "Elementary math, vocabulary", color: "from-blue-400 to-blue-600" },
  { icon: User, level: "Grade 3-5", description: "Multiplication, spelling, science", color: "from-green-400 to-green-600" },
  { icon: GraduationCap, level: "Grade 6-8", description: "Algebra, geography, grammar", color: "from-yellow-400 to-yellow-600" },
  { icon: Brain, level: "Grade 9-10", description: "Advanced math, physics, literature", color: "from-orange-400 to-orange-600" },
  { icon: Trophy, level: "Grade 10+", description: "College-level concepts", color: "from-red-400 to-red-600" },
]

export default function GradeLevels() {
  return (
    <section id="qa-system" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            12 Grade Levels for Every Learner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Pre-KG to College Level — Choose the perfect difficulty for your learning journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gradeLevels.map((grade, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-hover text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${grade.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                <grade.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{grade.level}</h3>
              <p className="text-sm text-gray-600">{grade.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Curated Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-gray-600">Grade Levels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-gray-600">Subject Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
