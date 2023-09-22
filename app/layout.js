import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rentopia',
  description: 'Discover our best cars for rent ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
