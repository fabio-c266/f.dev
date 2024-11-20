import { JourneyModel } from '@/data/models/JourneyModel'

type JourneyItemProps = JourneyModel

export function JourneyItem({
  company,
  role,
  roleType,
  startedIn,
  endedIn,
  description,
}: JourneyItemProps) {
  return (
    <div className="flex gap-12">
      <div className="border-2 border-solid text-green-500"></div>

      <div className="flex flex-col gap-6">
        <h1 className="font-baloo_bhai_2 font-bold text-green-500 text-3xl">
          {company}
        </h1>

        <div>
          <h2 className="font-bold text-2xl">
            {role} - {roleType}
          </h2>

          <span className="opacity-60 text-xl">
            {startedIn} - {endedIn}
          </span>
        </div>

        <p className="text-xl">{description}</p>
      </div>
    </div>
  )
}
