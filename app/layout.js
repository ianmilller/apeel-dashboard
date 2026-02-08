import './globals.css'

export const metadata = {
  title: 'Apeel Sciences - Digital Performance Dashboard',
  description: 'Digital Performance Dashboard for Apeel Sciences (Feb 2025 - Jan 2026)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
