import { AboutCardsData } from '@/data/constants/AboutMeCardsData'
import { SectionTitle } from './SectionTitle'
import { AboutMeCard } from './AboutMeCard'
import { SectionContainer } from './SectionContainer'

export function AboutMe() {
  return (
    <section id="about-me" className="min-h-screen">
      <SectionTitle title="Sobre mim" />

      <SectionContainer>
        {AboutCardsData.map((item) => (
          <AboutMeCard key={item.id} {...item} />
        ))}
      </SectionContainer>
    </section>
  )
}
