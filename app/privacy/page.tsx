'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Shield, Lock, Eye, Database, FileText, CheckCircle } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 29, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary-600" />
                Our Privacy Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock is committed to protecting your privacy. This policy explains how we handle your data and why AzLock is designed with privacy as a core principle.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <p className="font-semibold text-green-900">
                  ✓ 100% Offline Operation - Your data never leaves your device
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary-600" />
                Data Collection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>We collect ZERO personal data.</strong> Here's what that means:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No account registration required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No email addresses collected</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No phone numbers collected</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No usage analytics or tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">No advertisements or third-party trackers</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary-600" />
                Data Storage
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All app settings and preferences are stored <strong>locally on your device only</strong>:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Selected grade level for Q&A questions</li>
                <li>• Your chosen lock method (Q&A, PIN, Pattern, or Biometric)</li>
                <li>• List of apps you've chosen to lock</li>
                <li>• App theme preferences (dark/light mode)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This data <strong>never syncs to any cloud service</strong> and remains private to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary-600" />
                Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock does <strong>NOT use any third-party services</strong> that could access your data:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• No Google Analytics or similar tracking tools</li>
                <li>• No Facebook SDK or social media integration</li>
                <li>• No crash reporting services that send data externally</li>
                <li>• No advertising networks</li>
                <li>• No cloud backup services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Internet Permission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock <strong>does NOT require internet permission</strong>. The app functions completely offline. You can verify this by:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Checking the app permissions in your device settings</li>
                <li>• Enabling airplane mode and confirming the app still works</li>
                <li>• Testing that no data leaves your device</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Device Permissions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock requires the following Android permissions to function:
              </p>
              <ul className="space-y-3 mb-4">
                <li>
                  <strong className="text-gray-900">Device Admin:</strong>
                  <span className="text-gray-700"> To prevent unauthorized uninstallation</span>
                </li>
                <li>
                  <strong className="text-gray-900">Usage Access:</strong>
                  <span className="text-gray-700"> To detect when locked apps are opened</span>
                </li>
                <li>
                  <strong className="text-gray-900">Overlay Permission:</strong>
                  <span className="text-gray-700"> To display the lock screen over apps</span>
                </li>
                <li>
                  <strong className="text-gray-900">Biometric (Optional):</strong>
                  <span className="text-gray-700"> For fingerprint/face unlock feature</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These permissions are used <strong>only for core app functionality</strong> and never for data collection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Verifiable Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can <strong>verify AzLock's privacy claims</strong> through its technical design:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Zero internet permissions required (verifiable in app settings)</li>
                <li>• Works in airplane mode (test it yourself)</li>
                <li>• No account registration or cloud services</li>
                <li>• Minimal system permissions, only for core functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock is safe for users of all ages, including children:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• No age verification required</li>
                <li>• No personal information collected from anyone, including minors</li>
                <li>• Educational content is age-appropriate for selected grade levels</li>
                <li>• Parents have full control over app settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since all data stays on your device:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Your data is protected by your device's security features</li>
                <li>• No risk of server breaches or cloud leaks</li>
                <li>• You have complete control over your data</li>
                <li>• Uninstalling the app removes all data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we ever change our privacy practices, we will:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Update this page with the new policy</li>
                <li>• Display an in-app notification about changes</li>
                <li>• Maintain our commitment to zero data collection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this privacy policy or AzLock's privacy practices:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Email: ahamedyaserarafath@gmail.com</li>
              </ul>
            </section>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mt-8">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Our Promise</h3>
              <p className="text-primary-800">
                AzLock will <strong>always</strong> remain 100% offline, with zero data collection. 
                Your privacy is not just a feature—it's our foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
