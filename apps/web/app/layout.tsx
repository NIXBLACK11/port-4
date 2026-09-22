import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { AppProviders } from "@/components/app-providers"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

const title = "nixblack"
const description =
  "Portfolio of Siddharth Singh Rana, a full-stack engineer and founder building web apps, AI systems, backend tools, and Solana products."

export const metadata: Metadata = {
  metadataBase: new URL("https://nixblack.com"),
  title: {
    default: title,
    template: "%s | nixblack",
  },
  description:
    description,
  applicationName: title,
  authors: [{ name: "Siddharth Singh Rana", url: "https://nixblack.com" }],
  creator: "Siddharth Singh Rana",
  publisher: "nixblack",
  keywords: [
    "nixblack",
    "Siddharth Singh Rana",
    "full stack engineer",
    "portfolio",
    "Next.js developer",
    "TypeScript developer",
    "Go developer",
    "AI engineer",
    "Solana developer",
    "Web3 founder",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/nixblack.png", type: "image/png", sizes: "400x400" }],
    apple: [{ url: "/nixblack.png", type: "image/png", sizes: "400x400" }],
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/mainpage.png",
        width: 2940,
        height: 1556,
        alt: "nixblack portfolio homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@NIXBLACK_",
    images: [
      {
        url: "/mainpage.png",
        alt: "nixblack portfolio homepage preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}
