"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 50%, #E9D5FF 100%)",
      }}
    >
      {/* Navigation */}
      <nav className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div
              className="rounded-lg p-2"
              style={{
                background: "linear-gradient(to right, #893BD0, #8B5CF6)",
              }}
            >
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #893BD0, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GPT-5 Assistant
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg mb-6">
              This privacy policy applies to the{" "}
              <strong>GPT-5 Assistant</strong> app (hereby referred to as
              "Application") for mobile devices that was created by Igor
              Czupryniak (hereby referred to as "Service Provider") as an Ad
              Supported service. This service is intended for use "AS IS".
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information Collection and Use
            </h2>
            <p className="mb-4">
              The Application collects information when you download and use it.
              This information may include information such as:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>

            <p className="mb-6">
              The Application does not gather precise information about the
              location of your mobile device.
            </p>

            <p className="mb-6">
              The Service Provider may use the information you provided to
              contact you from time to time to provide you with important
              information, required notices and marketing promotions.
            </p>

            <p className="mb-6">
              For a better experience, while using the Application, the Service
              Provider may require you to provide us with certain personally
              identifiable information, including but not limited to{" "}
              <strong>email, name</strong>. The information that the Service
              Provider request will be retained by them and used as described in
              this privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Third Party Access
            </h2>
            <p className="mb-4">
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share your
              information with third parties in the ways that are described in
              this privacy statement.
            </p>

            <p className="mb-4">
              Please note that the Application utilizes third-party services
              that have their own Privacy Policy about handling data. Below are
              the links to the Privacy Policy of the third-party service
              providers used by the Application:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>
                <a
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  AdMob
                </a>
              </li>
              <li>
                <a
                  href="https://expo.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Expo
                </a>
              </li>
            </ul>

            <p className="mb-4">
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Opt-Out Rights
            </h2>
            <p className="mb-6">
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Retention Policy
            </h2>
            <p className="mb-6">
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you'd like them to delete User Provided Data that you have
              provided via the Application, please contact them at{" "}
              <a
                href="mailto:contact@askgpt5.app"
                className="hover:underline transition-colors"
                style={{ color: "#893BD0" }}
              >
                contact@askgpt5.app
              </a>{" "}
              and they will respond in a reasonable time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Children
            </h2>
            <p className="mb-6">
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <p className="mb-6">
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In
              the case the Service Provider discover that a child under 13 has
              provided personal information, the Service Provider will
              immediately delete this from their servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact the Service Provider (
              <a
                href="mailto:contact@askgpt5.app"
                className="hover:underline transition-colors"
                style={{ color: "#893BD0" }}
              >
                contact@askgpt5.app
              </a>
              ) so that they will be able to take the necessary actions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Security
            </h2>
            <p className="mb-6">
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Changes
            </h2>
            <p className="mb-6">
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>
            <p className="mb-6">
              <strong>This privacy policy is effective as of 2025-08-12</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Your Consent
            </h2>
            <p className="mb-6">
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="mb-8">
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at{" "}
              <a
                href="mailto:contact@askgpt5.app"
                className="hover:underline transition-colors"
                style={{ color: "#893BD0" }}
              >
                contact@askgpt5.app
              </a>
              .
            </p>

            <hr className="border-gray-300 my-8" />
            <p className="text-sm text-gray-500 text-center">
              This privacy policy page was generated by{" "}
              <a
                href="https://app-privacy-policy-generator.nisrulz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                App Privacy Policy Generator
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div
                className="rounded-lg p-2"
                style={{
                  background: "linear-gradient(to right, #893BD0, #8B5CF6)",
                }}
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                GPT-5 Assistant
              </span>
            </div>
            <div className="text-gray-400">
              <p>
                &copy; 2025 GPT-5 Assistant. Unlimited AI conversations, forever
                free.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
