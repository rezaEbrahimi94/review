'use client';

import { ThemeProvider } from '@emotion/react'
import './globals.css'
import theme from '@/theme/theme'
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SAM</title>
        <meta name='description' content='SAM - Stories Art Money' />
      </head>
      <body>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZn9jk0TD8VyngMbFKOTtieBgcC9fHmrc&libraries=places"></Script>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
