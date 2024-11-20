import { ReactNode } from 'react'

type SectionContainerProps = {
  children: ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <div className="flex flex-col gap-8">{children}</div>
}
