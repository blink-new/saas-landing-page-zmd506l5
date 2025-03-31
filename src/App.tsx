
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Pricing } from './components/sections/Pricing'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </main>
  )
}

export default App