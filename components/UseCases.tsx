'use client'

import React from 'react'
import { Users, BookOpen, Brain, Heart } from 'lucide-react'

const useCases = [
  {
    icon: Users,
    title: "For Parents",
    tagline: "Turn Your Child's Screen Time Into Study Time",
    quote: '"My 8-year-old daughter now loves doing math to unlock YouTube. She\'s getting better at multiplication tables!"',
    benefits: [
      "Set grade-appropriate questions for children",
      "Transform screen time into learning time",
      "Monitor educational progress through unlocks",
      "Create healthy tech-education balance"
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: BookOpen,
    title: "For Students",
    tagline: "Study Without Studying — Integrated Exam Prep",
    quote: '"Before my exam, I set it to Grade 10 physics. Now I\'m studying even when I\'m procrastinating!"',
    benefits: [
      "Exam prep integrated into daily routine",
      "Forced study breaks between app usage",
      "Subject-specific practice",
      "Better retention through repetition"
    ],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Brain,
    title: "For Lifelong Learners",
    tagline: "Stay Sharp While Staying Secure",
    quote: '"I love that I\'m practicing vocabulary every time I check Instagram. It\'s like Duolingo for app security!"',
    benefits: [
      "Stay mentally sharp throughout the day",
      "Practice subjects you're learning",
      "Turn idle phone time into study sessions",
      "Challenge yourself with higher grades"
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Heart,
    title: "For Senior Users",
    tagline: "Brain Training Disguised as Security",
    quote: '"The Pre-KG questions are perfect for my mom. She feels accomplished and it keeps her mind active."',
    benefits: [
      "Gentle cognitive exercises",
      "Easy questions don't frustrate",
      "Sense of achievement with each unlock",
      "Memory and recognition practice"
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50"
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Unique Use Cases Enabled by Q&A
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AzLock adapts to your needs — whether you're a parent, student, lifelong learner, or senior
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`${useCase.bgColor} rounded-2xl p-8 card-hover`}
            >
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-4">{useCase.tagline}</p>
              
              <blockquote className="italic text-gray-600 mb-6 pl-4 border-l-4 border-gray-300">
                {useCase.quote}
              </blockquote>

              <ul className="space-y-3">
                {useCase.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
