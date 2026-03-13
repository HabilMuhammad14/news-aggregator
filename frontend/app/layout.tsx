import React from 'react'
import Navbar from './components/Navbar'; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Navbar>
        {children}
        </Navbar>
      </body>
    </html>
  )
}