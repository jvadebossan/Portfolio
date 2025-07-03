import type { Metadata } from "next";
import AutoElite from "@/components/projects/autoElite";

export const metadata: Metadata = {
  title: "AutoElite - Premium Automotive Marketplace",
  description: "AutoElite is a premium automotive marketplace showcasing advanced vehicle search, management, and user authentication features. Built with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "AutoElite",
    "automotive marketplace",
    "car dealership",
    "vehicle search",
    "Next.js project",
    "TypeScript",
    "web application",
    "portfolio project"
  ],
  openGraph: {
    title: "AutoElite - Premium Automotive Marketplace",
    description: "Premium automotive marketplace with advanced search, vehicle management, and user authentication.",
    url: "https://jvad.dev/autoelite",
    siteName: "Jvad Portfolio",
    images: [
      {
        url: "/autoelite-og.jpg",
        width: 1200,
        height: 630,
        alt: "AutoElite - Premium Automotive Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoElite - Premium Automotive Marketplace",
    description: "Premium automotive marketplace with advanced search and vehicle management.",
    images: ["/autoelite-og.jpg"],
  },
  alternates: {
    canonical: "/autoelite",
  },
};

export default function AutoElitePage() {
  return <AutoElite />;
} 