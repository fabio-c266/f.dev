'use client'

import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { SocialButtons } from './SocialButtons'
import { ReactTyped } from 'react-typed'

export function Hero() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h1 className="baloo_bhai_2 font-semibold text-8xl mb-3">
            <ReactTyped
              strings={['Olá, eu sou o Fábio']}
              typeSpeed={80}
              backSpeed={40}
              backDelay={1200}
              loop={true}
              showCursor={true}
              cursorChar="|"
            />
          </h1>
          <p className="px-[2%] font-semibold text-xl">
            Um profissional fullstack, empenhado em entregar soluções
            escaláveis, seguras e chamativas
          </p>
        </div>

        <SocialButtons />
      </div>

      <a href="#about-me" className="mt-[20vh] animate-pingUpDown">
        <CaretDown size={28} weight="bold" />
      </a>
    </main>
  )
}
