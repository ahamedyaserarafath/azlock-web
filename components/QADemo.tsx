'use client'

import React, { useState } from 'react'
import { CheckCircle, XCircle, RefreshCw, Sparkles } from 'lucide-react'

const sampleQuestions = [
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "64"],
    correct: 1,
    subject: "Mathematics",
    grade: "Grade 3-5"
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2,
    subject: "General Knowledge",
    grade: "Grade 6-8"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    subject: "Science",
    grade: "Grade 3-5"
  }
]

export default function QADemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const question = sampleQuestions[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentQuestion((prev) => (prev + 1) % sampleQuestions.length)
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {question.subject}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            AI
          </span>
        </div>
        <span className="text-sm text-gray-500">{question.grade}</span>
      </div>

      <div className="mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔐</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Answer to Unlock
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          {question.question}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && handleAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
              showResult
                ? index === question.correct
                  ? 'bg-green-100 border-2 border-green-500 text-green-700'
                  : index === selectedAnswer
                  ? 'bg-red-100 border-2 border-red-500 text-red-700'
                  : 'bg-gray-100 text-gray-500'
                : 'bg-gray-50 hover:bg-primary-50 hover:border-primary-300 border-2 border-transparent text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showResult && index === question.correct && (
                <CheckCircle className="w-5 h-5 text-green-600" />
              )}
              {showResult && index === selectedAnswer && index !== question.correct && (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="text-center">
          {selectedAnswer === question.correct ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <p className="text-green-700 font-semibold">🎉 Correct! App Unlocked</p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-red-700 font-semibold">Try again or use PIN</p>
            </div>
          )}
          <button
            onClick={nextQuestion}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Another Question
          </button>
        </div>
      )}
    </div>
  )
}
