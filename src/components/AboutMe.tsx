import { AboutCardsData } from '@/data/constants/AboutMeCardsData'
import { SectionTitle } from './SectionTitle'
import { AboutMeCard } from './AboutMeCard'

export function AboutMe() {
  return (
    <section id="about-me" className="min-h-screen">
      <SectionTitle title="Sobre mim" />

      <div className="flex flex-col gap-8">
        {AboutCardsData.map((item) => (
          <AboutMeCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
