import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { AppProviders } from "@/components/app-providers"
import { cn } from "@workspace/ui/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

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
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Nix Black",
  description:
    "Siddharth Singh Rana's portfolio of full-stack engineering, AI tools, Solana products, and writing.",
}
