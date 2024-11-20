import { JourneyData } from '@/data/constants/JourneyData'
import { SectionTitle } from './SectionTitle'
import { JourneyItem } from './JourneyItem'
import { SectionContainer } from './SectionContainer'

export function Journey() {
  return (
    <section id="journey" className="min-h-screen">
      <SectionTitle title="Minha jornada" />

      <SectionContainer>
        {JourneyData.map((item) => (
          <JourneyItem key={item.id} {...item} />
        ))}
      </SectionContainer>
    </section>
  )
}
