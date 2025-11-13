import Script from "next/script";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GT-5 Assistant",
    applicationCategory: "CommunicationApplication",
    description:
      "Unlimited free AI conversations powered by leading AI models like Grok, DeepSeek, Gemini, GLM, Kimi, GPT, Qwen, and Claude.",
    url: "https://askgpt5.app",
    logo: "https://askgpt5.app/logo.png",
    screenshot: "https://askgpt5.app/screenshot.png",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free unlimited access to GT-5 conversations",
    },
    features: [
      "Unlimited conversations",
      "Responses powered by Grok, DeepSeek, Gemini, GLM, Kimi, GPT, Qwen, and Claude",
      "No subscription required",
      "24/7 availability",
      "Lightning fast responses",
      "Advanced AI capabilities",
    ],
    creator: {
      "@type": "Organization",
      name: "GT-5 Assistant Team",
    },
    publisher: {
      "@type": "Organization",
      name: "GT-5 Assistant",
    },
    potentialAction: {
      "@type": "UseAction",
      target: "https://askgpt5.app",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
