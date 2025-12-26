"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  BoltIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    icon: CpuChipIcon,
    title: "25+ Leading AI Models",
    description:
      "Access GPT, Grok, DeepSeek, Gemini, Claude, Qwen, Kimi, GLM and more — all in one app.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: BoltIcon,
    title: "Lightning Fast",
    description:
      "Optimized infrastructure delivers instant responses for seamless, natural conversations.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: GlobeAltIcon,
    title: "Always Available",
    description:
      "24/7 access from anywhere in the world. No downtime, no regional restrictions.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: CheckCircleIcon,
    title: "100% Free Forever",
    description:
      "No hidden costs, no premium tiers, no subscriptions. Completely free for everyone.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Unlimited Messages",
    description:
      "Chat as much as you want without any message limits or daily usage caps.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Private & Secure",
    description:
      "Your conversations stay private. We don't store or share your personal data.",
    gradient: "from-indigo-500 to-blue-600",
  },
];

const stats = [
  { value: "25+", label: "AI Models" },
  { value: "∞", label: "Free Messages" },
  { value: "4.1", label: "App Rating", hasStars: true },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Developer",
    content:
      "This app has completely changed how I work. Having access to multiple AI models for free is incredible. I use it daily for coding help and brainstorming.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Content Creator",
    content:
      "I've tried many AI chat apps, but GT-5 Assistant stands out. The variety of models available and the unlimited access make it my go-to app.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Student",
    content:
      "Perfect for studying and research. The fact that it's completely free with no limits means I can use it whenever I need help with assignments.",
    rating: 5,
  },
];

const aiModels = [
  "GPT-5",
  "Grok",
  "DeepSeek",
  "Gemini",
  "Claude",
  "Qwen",
  "Kimi",
  "GLM",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur-lg opacity-50" />
                <Image
                  src="/gt5_logo.png"
                  alt="GT-5 Assistant Logo"
                  width={48}
                  height={48}
                  className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                GT-5 Assistant
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 sm:space-x-8"
            >
              <Link
                href="#features"
                className="hidden sm:block text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="hidden sm:block text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                Reviews
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.nohet.gt5assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Get App
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
        >
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">Now with 25+ AI Models</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="block text-white">Unlimited AI Chat</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Completely Free
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Access GPT, Grok, DeepSeek, Gemini, Claude, and more — all in one app. 
              No subscriptions, no limits, no catches.
            </motion.p>

            {/* AI Model Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-xl mx-auto"
            >
              {aiModels.map((model, index) => (
                <motion.span
                  key={model}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default"
                >
                  {model}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nohet.gt5assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <Image
                  src="/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={220}
                  height={66}
                  className="relative h-19 sm:h-21 w-auto"
                />
              </a>
              <Link
                href="#features"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Explore Features
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* App Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 sm:mt-20 relative"
            >
              <div className="relative mx-auto w-72 sm:w-80">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                  <div className="bg-[#0f0f1a] rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Mock Chat Interface */}
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-[#0f0f1a] px-3 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                          </div>
                          <span className="text-white text-[10px] truncate max-w-[60px]">Solving A...</span>
                          <div className="bg-purple-600 rounded-full px-2 py-1 flex items-center gap-1">
                            <span className="text-white text-[9px] font-medium">DeepSeek V3.2</span>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Messages */}
                      <div className="flex-1 p-3 space-y-3 overflow-hidden bg-[#0f0f1a]">
                        {/* User Message - Right aligned */}
                        <div className="flex justify-end">
                          <div className="bg-purple-600 rounded-xl p-2.5 max-w-[75%]">
                            <p className="text-purple-200 text-[8px] font-medium mb-0.5">User</p>
                            <p className="text-white text-[10px] leading-relaxed">Can you help me solve this:</p>
                            <p className="text-white text-[10px] leading-relaxed">|x-1|/x &gt; 4</p>
                          </div>
                        </div>
                        
                        {/* AI Response - Left aligned */}
                        <div className="flex justify-start">
                          <div className="max-w-[90%] space-y-2 bg-[#1a1a2e] rounded-xl p-2.5">
                            <p className="text-gray-400 text-[9px]">AI</p>
                            <p className="text-white text-[10px] leading-relaxed">I&apos;ll help you solve this inequality step by step.</p>
                            
                            <div>
                              <p className="text-white text-[10px] font-semibold">Step 1: Understand the domain</p>
                              <p className="text-gray-300 text-[9px] leading-relaxed">Since we have |x-1|/x &gt; 4, we need x ≠ 0 (division by zero is undefined).</p>
                            </div>
                            
                            <div>
                              <p className="text-white text-[10px] font-semibold">Step 2: Consider cases</p>
                              <p className="text-white text-[9px] font-medium mt-1">Case 1: x &gt; 0</p>
                              <p className="text-gray-300 text-[9px] leading-relaxed">When x &gt; 0, we can multiply both sides by x:</p>
                              <p className="text-gray-300 text-[9px]">|x-1| &gt; 4x</p>
                            </div>

                            <div>
                              <p className="text-white text-[9px] font-medium">Case 1a: x ≥ 1</p>
                              <p className="text-gray-300 text-[9px]">x - 1 &gt; 4x</p>
                              <p className="text-gray-300 text-[9px]">-1 &gt; 3x</p>
                              <p className="text-gray-300 text-[9px]">x &lt; -1/3</p>
                            </div>
                            
                            {/* Continuation indicator */}
                            <div className="flex items-center gap-1 pt-1">
                              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></span>
                              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse delay-100"></span>
                              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse delay-200"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input */}
                      <div className="p-3 bg-[#0f0f1a] border-t border-white/5">
                        <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center">
                          <p className="text-gray-500 text-[10px]">Type a message...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-[4rem] blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 sm:py-20 border-y border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-12 sm:gap-16 lg:gap-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm sm:text-base text-gray-400 flex items-center justify-center gap-1">
                    {stat.label}
                    {stat.hasStars && (
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIconSolid key={i} className="h-3 w-3 text-yellow-500" />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">Features</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white">
              Everything You Need,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Nothing You Don&apos;t
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              We&apos;ve built the most powerful AI chat app with simplicity in mind
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20 sm:py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-semibold tracking-wide uppercase text-sm">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white">
              Loved by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              See what our users have to say about their experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIconSolid key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-gradient-to-r from-purple-600/80 to-violet-600/80 rounded-3xl p-8 sm:p-12 lg:p-16 text-center backdrop-blur-sm border border-white/10">
              <DevicePhoneMobileIcon className="h-12 w-12 sm:h-16 sm:w-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-8">
                Join over a million users experiencing the future of AI conversation. 
                Download now — it&apos;s completely free.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.nohet.gt5assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={240}
                  height={72}
                  className="relative h-19 sm:h-23 w-auto"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/gt5_logo.png"
                  alt="GT-5 Assistant Logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-xl"
                />
                <span className="text-xl font-bold text-white">GT-5 Assistant</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The most powerful AI chat app with access to 25+ leading models. 
                Unlimited, free, forever.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Reviews
                  </Link>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nohet.gt5assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Get the App</h4>
              <a
                href="https://play.google.com/store/apps/details?id=com.nohet.gt5assistant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 GT-5 Assistant. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with 💜 for AI enthusiasts everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
