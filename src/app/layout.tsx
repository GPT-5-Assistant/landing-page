import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://askgpt5.app"),
  title: "GPT-5 Assistant | Unlimited Free AI Conversations",
  description:
    "Experience unlimited free conversations with GPT-5, the most advanced AI model. No limits, no subscriptions, completely free forever.",
  keywords:
    "GPT-5, AI chat, free AI, unlimited AI, artificial intelligence, chatbot, conversation AI, OpenAI, free GPT",
  authors: [{ name: "GPT-5 Assistant Team" }],
  creator: "GPT-5 Assistant",
  publisher: "GPT-5 Assistant",
  robots: "index, follow",
  openGraph: {
    title: "GPT-5 Assistant | Unlimited Free AI Conversations",
    description:
      "Experience unlimited free conversations with GPT-5, the most advanced AI model. No limits, no subscriptions, completely free forever.",
    url: "https://askgpt5.app",
    siteName: "GPT-5 Assistant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ask GPT-5 - Unlimited Free AI Conversations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT-5 Assistant | Unlimited Free AI Conversations",
    description:
      "Experience unlimited free conversations with GPT-5, the most advanced AI model. No limits, no subscriptions, completely free forever.",
    images: ["/og-image.png"],
    creator: "@gpt5assistant",
  },
  alternates: {
    canonical: "https://askgpt5.app",
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
      },
      {
        url: "/icon.webp",
        type: "image/webp",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/icon.webp",
        type: "image/webp",
      },
    ],
    shortcut: "/favicon.webp",
    other: [
      {
        rel: "icon",
        url: "/favicon.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="icon" type="image/webp" sizes="any" href="/icon.webp" />
        <link rel="apple-touch-icon" href="/icon.webp" />
      </head>
      <JsonLd />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
