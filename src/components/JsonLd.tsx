import Script from "next/script";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GPT-5 Assistant",
    applicationCategory: "CommunicationApplication",
    description:
      "Unlimited free AI conversations powered by GPT-5. Experience the most advanced AI model without limits or subscriptions.",
    url: "https://askgpt5.app",
    logo: "https://askgpt5.app/logo.png",
    screenshot: "https://askgpt5.app/screenshot.png",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free unlimited access to GPT-5 conversations",
    },
    features: [
      "Unlimited conversations",
      "GPT-5 powered responses",
      "No subscription required",
      "24/7 availability",
      "Lightning fast responses",
      "Advanced AI capabilities",
    ],
    creator: {
      "@type": "Organization",
      name: "GPT-5 Assistant Team",
    },
    publisher: {
      "@type": "Organization",
      name: "GPT-5 Assistant",
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
