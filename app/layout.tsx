import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AppMarket – Premium Apps & Source Code for Your Business",
  description:
    "Buy ready-made apps, source code, and managed solutions. Discover high-quality, customizable apps for small businesses, startups, and developers. Start today!",
  keywords: "buy app source code, ready-made apps, business apps, app marketplace, premium apps",
  openGraph: {
    title: "AppMarket – Premium Apps & Source Code for Your Business",
    description: "Buy ready-made apps, source code, and managed solutions. Start today!",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
