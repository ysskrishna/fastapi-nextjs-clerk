import type React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import "@/app/globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastAPI + Next.js + Clerk Integration Demo",
  description:
    "A full-stack template demonstrating authentication with Clerk, JWT-secured API calls from Next.js to FastAPI, and a modern dashboard UI. Features user sign-in, protected endpoints, and personalized content.",
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
  authors: [{ name: "ysskrishna", url: "https://github.com/ysskrishna" }],
  creator: "ysskrishna",
  openGraph: {
    title: "FastAPI + Next.js + Clerk Integration Demo",
    description:
      "A template for building full-stack apps with Next.js frontend, Clerk authentication, and FastAPI backend secured by JWT.",
    url: "https://github.com/ysskrishna/fastapi-nextjs-clerk",
    siteName: "FastAPI Next.js Clerk Demo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FastAPI Next.js Clerk Demo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  metadataBase: new URL("http://localhost:3000"),
};


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
