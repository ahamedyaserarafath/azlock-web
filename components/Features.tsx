'use client'

import React from 'react'
import { Lock, Fingerprint, Shield, Zap, Moon, Smartphone, Eye, Settings, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: "Alternative Lock Methods",
    description: "PIN, Pattern, and Biometric options for quick access when you need speed over education",
    color: "text-blue-600"
  },
  {
    icon: Fingerprint,
    title: "Biometric Support",
    description: "Fingerprint and Face ID for instant unlocking without compromising security",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "100% Offline & Private",
    description: "Zero data collection, no internet required. Your data stays on your device",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Material 3 Design",
    description: "Modern, beautiful interface with smooth animations and haptic feedback",
    color: "text-orange-600"
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Easy on the eyes with full dark mode support for comfortable night usage",
    color: "text-indigo-600"
  },
  {
    icon: Smartphone,
    title: "Landscape Compatible",
    description: "Works perfectly in any orientation — portrait or landscape mode",
    color: "text-pink-600"
  },
  {
    icon: Eye,
    title: "Anti-Uninstall Protection",
    description: "Prevents unauthorized removal with device admin protection features",
    color: "text-red-600"
  },
  {
    icon: Settings,
    title: "Developer Tools",
    description: "Built-in diagnostics, crash logs, and permission checker for transparency",
    color: "text-teal-600"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features Beyond Q&A
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational security meets modern convenience with these additional features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-hover"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">What Makes AzLock Different?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-300">The Competition:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">✗</span>
                  <span>Just PIN/Pattern locks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">✗</span>
                  <span>Requires account & internet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">✗</span>
                  <span>Ads everywhere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 mr-2">✗</span>
                  <span>Cloud-based privacy concerns</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-green-300">AzLock:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span className="font-semibold">Educational Q&A System — World's first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>100% Offline — Your data stays private</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Zero Ads in Q&A — Distraction-free learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Open Source — Transparent security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
