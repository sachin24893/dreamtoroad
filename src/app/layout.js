import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './comp/Navbar'
import Store_provider from './store/Store_provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'online truck booking',
  description: 'online truck booking',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Store_provider>
      <Navbar/> 
      {children}
      
      </Store_provider>
      
      </body>
    </html>
  )
}
