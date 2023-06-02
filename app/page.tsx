import Navigation from '@/components/navigation/Navigation'
import { Hero } from '@/components/ui/hero'

export default function Home() {
  const klass = [
    "mx-auto px-4 min-h-screen max-w-[1080px]",
  ].join(' ')

  return (
    <>
      <Navigation />
      <div className='pt-[96px]'>
        <main className={klass}>
          <Hero />
        </main>
      </div>
    </>
  )
}
