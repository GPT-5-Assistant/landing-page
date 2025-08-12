"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  BoltIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-2"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center space-x-6"
          >
            <Link
              href="#features"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <button
              className="text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:opacity-90"
              style={{
                background: "linear-gradient(to right, #893BD0, #8B5CF6)",
              }}
            >
              Start Chatting Now
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Unlimited{" "}
                <span
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #893BD0, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Free
                </span>{" "}
                Conversations
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mt-4">
                Powered by{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GPT-5
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of AI conversation with unlimited access to
              GPT-5. No limits, no subscriptions, completely free forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.askgpt5.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all transform hover:scale-105"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={206}
                  height={60}
                  className="h-23 w-auto"
                />
              </a>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-purple-500 hover:text-purple-600 transition-all">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 opacity-20"
          >
            <SparklesIcon className="h-16 w-16" style={{ color: "#893BD0" }} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-10 opacity-20"
          >
            <BoltIcon className="h-20 w-20" style={{ color: "#8B5CF6" }} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose GPT-5 Assistant?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the most advanced AI conversation platform with
              features that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: "GPT-5 Powered",
                description:
                  "Access to the latest and most advanced AI model with superior reasoning and knowledge capabilities.",
              },
              {
                icon: BoltIcon,
                title: "Lightning Fast",
                description:
                  "Optimized infrastructure ensures rapid response times for seamless conversations.",
              },
              {
                icon: GlobeAltIcon,
                title: "Always Available",
                description:
                  "24/7 access from anywhere in the world. No downtime, no restrictions.",
              },
              {
                icon: CheckCircleIcon,
                title: "Completely Free",
                description:
                  "No hidden costs, no premium tiers, no subscription fees. Forever free for everyone.",
              },
              {
                icon: ChatBubbleLeftRightIcon,
                title: "Unlimited Conversations",
                description:
                  "Chat as much as you want without any message limits or usage restrictions.",
              },
              {
                icon: SparklesIcon,
                title: "Advanced Features",
                description:
                  "Code generation, analysis, creative writing, and complex problem-solving capabilities.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className="rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: "linear-gradient(to right, #893BD0, #8B5CF6)",
                  }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #893BD0, #8B5CF6)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Experience GPT-5?
            </h2>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: "#E9D5FF" }}
            >
              Join thousands of users already enjoying unlimited free
              conversations with the most advanced AI model available.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.askgpt5.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-all transform hover:scale-105"
            >
              <Image
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                width={245}
                height={73}
                className="h-30 w-auto"
              />
            </a>
          </motion.div>
        </div>
      </section>

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
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-4">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div className="text-gray-400">
                <p>
                  &copy; 2025 GPT-5 Assistant. Unlimited AI conversations,
                  forever free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
