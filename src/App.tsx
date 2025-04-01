import { Header } from '@/components/header'
import { Hero } from '@/sections/hero'

function App() {
  return (
    <>
      <Header />
      <main className='py-12 md:py-24'>
        <Hero />
      </main>
    </>
  )
}

export default App
