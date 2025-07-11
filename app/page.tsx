import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
// import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FAQ } from "@/components/sections/faq";
import { AboutCTA } from "@/components/sections/about-cta";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Full-Stack Developer & Web Designer",
  description: "Professional full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences that drive business growth and user engagement. Available for freelance projects worldwide.",
  keywords: [
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "freelance developer",
    "web development services",
    "mobile app development",
    "e-commerce development",
    "UI/UX design",
    "portfolio"
  ],
  openGraph: {
    title: "Jvad | Full-Stack Developer & Web Designer",
    description: "Professional full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences that drive business growth.",
    url: "https://jvad.net",
    siteName: "Jvad Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jvad - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jvad | Full-Stack Developer & Web Designer",
    description: "Professional full-stack developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Pricing />
        <FAQ />
        <AboutCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
