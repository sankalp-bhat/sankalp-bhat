import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sankalp Bhat - Software Engineer & Data Scientist",
  description:
    "Portfolio website of Sankalp Bhat - Software Engineer passionate about building scalable solutions and exploring data science.",
  keywords: "Sankalp Bhat, Software Engineer, Data Scientist, Portfolio, Web Development, Machine Learning",
  authors: [{ name: "Sankalp Bhat" }],
  openGraph: {
    title: "Sankalp Bhat - Software Engineer & Data Scientist",
    description:
      "Portfolio website showcasing projects, publications, and experience in software engineering and data science.",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
