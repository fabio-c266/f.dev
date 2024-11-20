import Img from 'next/image'
import { AboutMeCardModel } from '@/data/models/AboutMeCardModel'

type AboutMeCardProps = AboutMeCardModel

export function AboutMeCard({ img, title, description }: AboutMeCardProps) {
  return (
    <div className="flex items-center gap-12 p-8 shadow-xl rounded-xl bg-white hover:translate-y-[-8px] transition-transform">
      <Img src={img.path} alt={img.name} width={80} height={80} />

      <div className="flex flex-col gap-4 w-full">
        <h2 className="font-extrabold text-4xl text-center pr-[10vw]">
          {title}
        </h2>
        <p className="font-semibold text-lg">{description}</p>
      </div>
    </div>
  )
}
