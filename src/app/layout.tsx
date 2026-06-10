import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sistech Cafe',
  description: 'Local Coffee brewed by Extraordinary Women in Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
