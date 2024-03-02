import Projects from '@/app/(home)/projects'
import Navigation from '@/components/navigation/Navigation'
import { Hero } from '@/app/(home)/hero'
import Link from 'next/link'

export default function Home() {
  const klass = [
    "mx-auto min-h-[calc(100dvh)] max-w-[1080px]",
  ].join(' ')

  return (
    <>
      <Navigation />
      <main className={klass}>
        <Link href="/contact" prefetch />
        <Hero />
        <Projects />
      </main>
    </>
  )
}
