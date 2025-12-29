'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is AzLock?",
    answer: "AzLock is the world's first educational app lock that turns every unlock into a learning opportunity. Instead of using a simple PIN, you answer educational questions from subjects like Math, Science, English, and General Knowledge across 12 grade levels (Pre-KG to Grade 10+)."
  },
  {
    question: "How does the Q&A system work?",
    answer: "When you try to open a locked app, AzLock presents you with a multiple-choice question from your selected grade level and subject. Answer correctly to unlock the app. If you answer wrong 5 times, you can use your backup PIN to unlock. This keeps your brain engaged while maintaining security."
  },
  {
    question: "What grade levels are available?",
    answer: "AzLock offers 12 grade levels: Pre-KG, KG, Grade 1-2, Grade 3-5, Grade 6-8, Grade 9-10, and Grade 10+ (College level). Each level has age-appropriate questions, so whether you're helping a child learn or challenging yourself, there's a perfect level for you."
  },
  {
    question: "Can I still use a regular PIN or pattern?",
    answer: "Yes! AzLock offers multiple lock methods: Educational Q&A (our unique feature), Traditional PIN (4+ digits), Pattern Lock (gesture-based), and Biometric (fingerprint/face ID). You can switch between these methods anytime based on your needs."
  },
  {
    question: "Is AzLock really 100% offline?",
    answer: "Absolutely! AzLock works completely offline and never requires internet access. All your data, settings, and preferences stay on your device. We don't collect any personal information, track your usage, or send data to any servers. Your privacy is guaranteed."
  },
  {
    question: "Does AzLock collect any personal data?",
    answer: "No. AzLock collects ZERO personal data. We don't require account registration, email addresses, phone numbers, or any identifying information. No analytics, no tracking, no advertisements. Everything stays on your device."
  },
  {
    question: "How many questions are available?",
    answer: "AzLock includes 100+ curated educational questions across 4 subject categories (Mathematics, Science, English, and General Knowledge). Questions are randomly selected, so you won't see the same question repeatedly."
  },
  {
    question: "Can I use AzLock for parental control?",
    answer: "Yes! Many parents use AzLock to make their children's screen time educational. Set age-appropriate questions for your child's grade level, lock their favorite apps, and they'll practice math, vocabulary, or science every time they want to use those apps. It's screen time that teaches!"
  },
  {
    question: "What happens if I forget my PIN?",
    answer: "If you forget your PIN, you can reset it through your device's settings by clearing AzLock's data. Note that this will also reset your app preferences, so you'll need to set up AzLock again. We recommend writing down your PIN in a secure location."
  },
  {
    question: "Can someone uninstall AzLock to bypass the lock?",
    answer: "AzLock uses Device Administrator protection to prevent unauthorized uninstallation. You'll need to unlock with your PIN/Q&A before you can uninstall the app, keeping your locked apps secure."
  },
  {
    question: "Which apps can I lock with AzLock?",
    answer: "You can lock any app installed on your device, including social media apps (Facebook, Instagram, Twitter), messaging apps (WhatsApp, Telegram), games, browsers (Chrome, Firefox), and even system apps. You have complete control over which apps to lock."
  },
  {
    question: "Does AzLock work on tablets?",
    answer: "Yes! AzLock works on both Android phones and tablets. The interface is optimized for different screen sizes and orientations (portrait and landscape mode)."
  },
  {
    question: "Is there a dark mode?",
    answer: "Yes, AzLock includes full dark mode support. The app will automatically adapt to your device's system theme, or you can manually toggle between light and dark modes in the settings."
  },
  {
    question: "Can I customize which subjects appear in questions?",
    answer: "Currently, questions are randomly selected from all four subjects (Math, Science, English, General Knowledge) at your chosen grade level. Future updates may include subject-specific filtering based on user feedback."
  },
  {
    question: "What permissions does AzLock need?",
    answer: "AzLock requires: Device Admin (to prevent unauthorized uninstall), Usage Access (to detect when apps open), Overlay Permission (to display lock screen), and optionally Biometric permission (for fingerprint/face unlock). These permissions are only used for core functionality, never for data collection."
  },
  {
    question: "How can I trust AzLock's privacy claims?",
    answer: "AzLock's privacy-first design is verifiable through its functionality: it requires zero internet permissions, collects no personal data, and works 100% offline. You can verify these claims by checking the app's required permissions in your device settings and testing it in airplane mode."
  },
  {
    question: "Does AzLock drain battery?",
    answer: "No. AzLock is lightweight (only 13MB) and uses minimal system resources. It runs efficiently in the background and has negligible impact on battery life."
  },
  {
    question: "Can I lock apps at specific times?",
    answer: "The current version requires manual app locking. Time-based scheduling (e.g., lock social media during study hours) is a feature we're considering for future updates based on user demand."
  },
  {
    question: "What Android versions are supported?",
    answer: "AzLock supports Android 6.0 (Marshmallow) and above. This covers the vast majority of Android devices in use today."
  },
  {
    question: "Is AzLock free?",
    answer: "Yes! AzLock is completely free with no subscriptions, in-app purchases, or hidden fees. We believe educational security should be accessible to everyone."
  },
  {
    question: "Are there ads in AzLock?",
    answer: "No advertisements whatsoever. The Q&A experience is distraction-free, and you'll never see ads in the app. We don't use advertising networks, so your privacy is protected."
  },
  {
    question: "Can I suggest new features?",
    answer: "Absolutely! We welcome feature suggestions and feedback. You can contact us via email at ahamedyaserarafath@gmail.com. We actively consider user feedback for future updates."
  },
  {
    question: "How do I report a bug?",
    answer: "If you encounter a bug, please contact us at ahamedyaserarafath@gmail.com with details about your device, Android version, and steps to reproduce the issue. Include screenshots if possible to help us identify and fix the problem quickly."
  },
  {
    question: "Will my progress/settings sync across devices?",
    answer: "No. Since AzLock is 100% offline with no cloud services, settings and preferences don't sync between devices. Each device maintains its own local configuration. This ensures complete privacy but means you'll need to set up AzLock separately on each device."
  },
  {
    question: "Can I backup my AzLock settings?",
    answer: "Currently, there's no built-in backup feature. Since all data is local and we use no cloud services, you would need to use your device's standard app backup tools. Future versions may include local export/import functionality."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about AzLock
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ahamedyaserarafath@gmail.com"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
