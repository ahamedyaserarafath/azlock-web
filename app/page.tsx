'use client'

import React, { useState } from 'react'
import { 
  Brain, Lock, GraduationCap, Users, Trophy, Shield, 
  BookOpen, Calculator, Beaker, Globe, Zap, Heart,
  CheckCircle, XCircle, Download, Star, ArrowRight,
  Smartphone, Baby, User, UserCircle, School
} from 'lucide-react'
import QADemo from '@/components/QADemo'
import GradeLevels from '@/components/GradeLevels'
import UseCases from '@/components/UseCases'
import Comparison from '@/components/Comparison'
import Features from '@/components/Features'
import Statistics from '@/components/Statistics'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-medium">World's First Educational App Lock</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn While You Lock
              </h1>
              
              <p className="text-xl lg:text-2xl mb-4 text-blue-100 font-medium">
                The Only App Lock That Makes You Smarter
              </p>
              
              <p className="text-lg mb-8 text-blue-100/90 leading-relaxed">
                Answer educational questions to unlock your apps. Choose from <span className="font-semibold text-white">12 grade levels</span> across Math, Science, English, and General Knowledge.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>100+ Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>12 Grade Levels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>100% Offline</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-xl">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <QADemo />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Statistics Bar */}
      <Statistics />

      {/* Q&A System Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
              The Q&A Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AzLock isn't just another app locker — it's the world's first Educational Security System that turns every unlock into a learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl card-hover">
              <Calculator className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mathematics</h3>
              <p className="text-gray-700">Arithmetic, algebra, geometry problems</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl card-hover">
              <Beaker className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Science</h3>
              <p className="text-gray-700">Physics, chemistry, biology concepts</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl card-hover">
              <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">English</h3>
              <p className="text-gray-700">Grammar, vocabulary, comprehension</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl card-hover">
              <Globe className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">General Knowledge</h3>
              <p className="text-gray-700">Geography, history, current affairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <GradeLevels />

      {/* Comparison Section */}
      <Comparison />

      {/* Use Cases */}
      <UseCases />

      {/* Features */}
      <Features />

      {/* Download CTA */}
      <DownloadCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
