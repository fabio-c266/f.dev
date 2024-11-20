import { AboutMe } from '@/components/AboutMe'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Journey } from '@/components/Journey'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-20">
        <Hero />
        <AboutMe />
        <Journey />
        <Projects />
        {/*
        // Contact
        // Footer
        */}
      </div>
    </>
  )
}
