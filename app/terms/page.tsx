'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Scale className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: December 30, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary-600" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, installing, or using AzLock ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These terms constitute a legal agreement between you (the "User") and AzLock. We reserve the right to update these terms at any time, and continued use of the App constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock is an educational app lock that requires users to answer educational questions to unlock selected applications. The App operates entirely offline and does not collect or transmit any personal data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The App provides:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• AI-generated educational questions across multiple subjects and grade levels</li>
                <li>• App locking functionality using various unlock methods (Q&A, PIN, Pattern, Biometric)</li>
                <li>• Offline operation with zero data collection</li>
                <li>• Parental control features for educational screen time management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intended Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock is intended for:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• <strong>Personal Use:</strong> Individuals seeking to make their screen time more educational</li>
                <li>• <strong>Parental Control:</strong> Parents managing their children's device usage</li>
                <li>• <strong>Educational Purposes:</strong> Students using the app to reinforce learning</li>
                <li>• <strong>Self-Improvement:</strong> Users looking to stay mentally sharp</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-amber-900">
                  <strong>Important:</strong> AzLock is NOT intended for unauthorized access control, surveillance, or any illegal purposes. Users are responsible for ensuring their use complies with applicable laws.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary-600" />
                Device Permissions and Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using AzLock, you acknowledge and accept that the App requires certain Android permissions:
              </p>
              <ul className="space-y-3 mb-4 text-gray-700">
                <li>
                  <strong>Device Administrator:</strong> Required to prevent unauthorized uninstallation. You acknowledge that this permission gives the App elevated privileges on your device.
                </li>
                <li>
                  <strong>Usage Access:</strong> Required to detect when locked apps are opened. This permission allows the App to monitor app usage on your device.
                </li>
                <li>
                  <strong>Display Over Other Apps:</strong> Required to show the lock screen when accessing locked apps.
                </li>
                <li>
                  <strong>Biometric (Optional):</strong> If enabled, allows fingerprint or face unlock as an alternative to Q&A.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>You are responsible for:</strong>
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Properly configuring the App's settings</li>
                <li>• Securely storing your PIN and backup unlock methods</li>
                <li>• Understanding that Device Admin prevents easy uninstallation (by design)</li>
                <li>• Following the proper uninstallation procedure if you wish to remove the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Educational Content Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The educational questions provided by AzLock are generated using artificial intelligence and are intended for general knowledge and learning purposes only.
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Questions may not be 100% accurate or up-to-date</li>
                <li>• Content is not a substitute for formal education or professional tutoring</li>
                <li>• Grade level classifications are approximate and may vary by educational system</li>
                <li>• We do not guarantee the educational effectiveness of the questions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Use the App for any illegal or unauthorized purpose</li>
                <li>• Attempt to reverse engineer, decompile, or disassemble the App</li>
                <li>• Use the App to control devices you do not own or have permission to manage</li>
                <li>• Remove or circumvent any security features of the App</li>
                <li>• Use the App in a manner that could damage, disable, or impair the App or interfere with other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• The App is provided "AS IS" without warranties of any kind</li>
                <li>• We do not guarantee uninterrupted or error-free operation</li>
                <li>• We are not responsible for any data loss, device malfunction, or inability to access apps</li>
                <li>• We are not liable for any damages arising from use or inability to use the App</li>
                <li>• You use the App at your own risk</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-900">
                  <strong>Critical Disclaimer:</strong> If you forget your PIN and cannot answer the security questions, you may be locked out of your apps. We cannot help you regain access. Always remember your PIN or write it down in a secure location.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                No Warranty
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AzLock is provided free of charge and without any warranty, express or implied, including but not limited to:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Merchantability</li>
                <li>• Fitness for a particular purpose</li>
                <li>• Non-infringement</li>
                <li>• Accuracy of educational content</li>
                <li>• Device compatibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless AzLock and its developers from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Your use or misuse of the App</li>
                <li>• Your violation of these Terms of Service</li>
                <li>• Your violation of any rights of another party</li>
                <li>• Any damage to devices caused by the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of AzLock is also governed by our Privacy Policy. AzLock operates 100% offline and collects zero personal data. For full details, please review our <a href="/azlock-web/privacy" className="text-primary-600 hover:text-primary-700 font-semibold">Privacy Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Modifications to the App
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Modify, suspend, or discontinue the App at any time without notice</li>
                <li>• Update features, questions, or functionality</li>
                <li>• Change these Terms of Service at our discretion</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Continued use of the App after updates constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your use of AzLock at any time by:
              </p>
              <ol className="space-y-2 mb-4 text-gray-700 list-decimal list-inside">
                <li>Unlocking the App with your PIN or Q&A</li>
                <li>Disabling Device Administrator in Android Settings → Security → Device Admins</li>
                <li>Uninstalling the App from your device</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or restrict access to the App at our discretion, though this is unlikely given the App's offline nature.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Children's Use
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While AzLock includes content appropriate for children (Pre-KG to Grade 10+), the App requires parental supervision when used by minors. Parents and guardians are responsible for:
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li>• Configuring appropriate grade levels for their children</li>
                <li>• Monitoring their children's use of the App</li>
                <li>• Ensuring children do not get locked out of important apps</li>
                <li>• Managing PIN/unlock methods securely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with applicable local laws. Any disputes arising from these terms or your use of the App shall be resolved in accordance with the laws of your jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Severability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and AzLock regarding your use of the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Email: azlock.ai@gmail.com</li>
              </ul>
            </section>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mt-8">
              <h3 className="text-xl font-bold text-primary-900 mb-2">Acknowledgment</h3>
              <p className="text-primary-800">
                By using AzLock, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use the App.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
