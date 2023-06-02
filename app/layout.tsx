import './globals.css'
import { Poppins } from 'next/font/google'

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const inter = Poppins({ subsets: ['latin-ext'], weight: ["300", "400", "500", "600", "700", "800"] })

const klass = [
  "mx-auto px-4 min-h-screen max-w-[1080px]",
  inter.className
].join(' ')

export const metadata = {
  title: 'fluwide - home',
  description: 'It\'s me',
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className={true ? "dark MOGGIE" : ""}>
      <body>
        <div className={klass}>
          {props.children}
        </div>
        {props.modal}
      </body>
    </html>
  )
}
