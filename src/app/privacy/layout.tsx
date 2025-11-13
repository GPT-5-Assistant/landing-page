import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GT-5 Assistant",
  description:
    "Privacy policy for GT-5 Assistant app. Learn how we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
