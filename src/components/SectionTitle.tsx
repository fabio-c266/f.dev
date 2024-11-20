type SectionTitleProps = {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="font-extrabold text-7xl text-center py-[6vh]">{title}</h1>
  )
}
