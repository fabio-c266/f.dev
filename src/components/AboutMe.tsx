import { AboutCardsData } from '@/data/constants/AboutCardsData'
import { SectionTitle } from './SectionTitle'
import { AboutCard } from './AboutCard'

export function AboutMe() {
  return (
    <section id="about-me" className="min-h-screen">
      <SectionTitle title="Sobre mim" />

      <div className="flex flex-col gap-8">
        {AboutCardsData.map((item) => (
          <AboutCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
