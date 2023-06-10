import './globals.scss';

import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar/Navbar';

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
  },
)

export const metadata = {
  title: 'Reflex It Solution',
  description: 'Site Updated',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
