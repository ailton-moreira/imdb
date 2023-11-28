import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone App',
  description: 'This is the IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/**HEADER */}
          <Header />
        {/**NAVBAR */}

        {/**SearchBar */}
        
        {children}</body>
    </html>
  )
}
