import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GPT-5 Assistant",
  description:
    "Terms and conditions for GPT-5 Assistant app. Read our terms of service and user agreement.",
  robots: "index, follow",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
