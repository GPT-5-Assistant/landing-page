import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GT-5 Assistant - Unlimited Free AI Conversations",
    short_name: "GT-5 Assistant",
    description:
      "Experience unlimited free conversations with GT-5, the most advanced AI model.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon2.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
