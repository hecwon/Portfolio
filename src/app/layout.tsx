import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '../../components/nav/Nav';
import Blob from '../../components/blob/blob';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hector Wong',
  description: 'Hector\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Blob />
        <Nav />
        {children}
      </body>
    </html>
  )
}
