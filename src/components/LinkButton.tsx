import { ReactNode } from 'react'

type LinkButtonProps = {
  text: string
  icon: ReactNode
  to: string
}

export function LinkButton({ text, icon, to }: LinkButtonProps) {
  return (
    <a
      href={to}
      target="_blank"
      className="flex items-center gap-3 bg-green-100 w-fit py-2 px-4 rounded-lg hover:translate-y-2 transition-transform"
    >
      {icon}
      <span className="font-semibold">{text}</span>
    </a>
  )
}
