import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Progress Heatmap — Visualize Learning Progress',
  description: 'Visual heatmaps of student performance across topics and time with automated intervention alerts for K-12 teachers and tutoring centers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="30793281-ff60-407f-98cc-e40a8c0f5a71"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
