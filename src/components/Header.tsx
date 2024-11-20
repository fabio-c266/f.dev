const navLinks = [
  {
    name: 'sobre mim',
    to: '#about-me',
  },
  {
    name: 'jornada',
    to: '#journey',
  },
  {
    name: 'projetos',
    to: '#projects',
  },
  {
    name: 'contato',
    to: '#contact',
  },
]

export function Header() {
  return (
    <header className="sticky z-50 px-20 flex items-center justify-between h-[20vh] w-full">
      <a className="font-black text-6xl" href="#hero">
        f.dev
      </a>

      <ul className="flex items-center gap-8">
        {navLinks.map((item, index) => {
          return (
            <li className="font-bold text-xl" key={index}>
              <a className="hover:text-gray-300 transition" href={item.to}>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
