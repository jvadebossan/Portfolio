import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData, WebsiteStructuredData, OrganizationStructuredData } from "@/components/seo/structured-data";
import { GoogleAnalytics } from "@/components/seo/google-analytics";

export const metadata: Metadata = {
  title: {
    default: "Jvad | Full-Stack Developer & Web Designer",
    template: "%s | Jvad"
  },
  description: "Full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences that drive business growth and user engagement.",
  keywords: [
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "frontend developer",
    "backend developer",
    "web designer",
    "UI/UX designer",
    "JavaScript developer",
    "TypeScript developer",
    "portfolio",
    "freelance developer",
    "web development",
    "mobile app development",
    "e-commerce development"
  ],
  authors: [{ name: "Jvad", url: "https://jvad.dev" }],
  creator: "Jvad",
  publisher: "Jvad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jvad.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jvad.dev',
    title: 'Jvad | Full-Stack Developer & Web Designer',
    description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences that drive business growth.',
    siteName: 'Jvad Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jvad - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jvad | Full-Stack Developer & Web Designer',
    description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences that drive business growth.',
    images: ['/og-image.jpg'],
    creator: '@jvadebossan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <WebsiteStructuredData />
          <OrganizationStructuredData />
          {/* Uncomment and add your GA_MEASUREMENT_ID when ready */}
          {/* <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
