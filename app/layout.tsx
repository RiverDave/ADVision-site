import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import ResponseProvider from "@/components/Providers/ResponseProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Advision ~ The Future of Advertising",
  description: "Advision is the future of advertising.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponseProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ResponseProvider>
      </body>
    </html>
  )
}
