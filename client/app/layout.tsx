import type React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import "@/app/globals.css"
import { Metadata } from "next"

const siteConfig = {
  name: "FastAPI + Next.js + Clerk Integration Demo",
  description:
    "A full-stack template demonstrating authentication with Clerk, JWT-secured API calls from Next.js to FastAPI, and a modern dashboard UI. Features user sign-in, protected endpoints, and personalized content.",
  ogImage: "http://localhost:3000/og-image.png",
  url: "http://localhost:3000",
  twitterHandle: "@ysskrishna",
  author: "ysskrishna",
  authorUrl: "https://github.com/ysskrishna",
  githubUrl: "https://github.com/ysskrishna",
  linkedinUrl: "https://www.linkedin.com/in/ysskrishna/",
  productHuntUrl: "https://www.producthunt.com/@ysskrishna"
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "fastapi",
    "nextjs",
    "clerk",
    "authentication",
    "jwt",
    "api",
    "integration",
    "typescript",
    "tailwindcss",
    "dashboard",
    "fullstack"
  ],
  authors: [{
    name: siteConfig.author,
    url: siteConfig.authorUrl
  }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    linkedin: siteConfig.linkedinUrl,
    github: siteConfig.githubUrl,
    producthunt: siteConfig.productHuntUrl,
    "application-name": siteConfig.name,
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              {children}
              <hr className="w-full border-t" />
              <div className="max-w-6xl mx-auto w-full px-4">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
