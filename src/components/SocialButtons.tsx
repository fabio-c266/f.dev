import {
  FileArrowDown,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import { LinkButton } from './LinkButton'

export function SocialButtons() {
  return (
    <div className="flex items-center gap-7 justify-center">
      <LinkButton
        text="Linkedin"
        icon={<LinkedinLogo size={28} weight="bold" />}
        to="https://www.linkedin.com/in/fabio-caldas-a1545b220"
      />

      <LinkButton
        text="Github"
        icon={<GithubLogo size={28} weight="bold" />}
        to="https://github.com/fabio-c266"
      />

      <LinkButton
        text="Download CV"
        icon={<FileArrowDown size={28} weight="bold" />}
        to="https://docs.google.com/document/d/1ZWk1lMDqy26FQKrc0X-irTQQTbzDh26KJtRsx0UPvyg/edit?usp=sharing"
      />
    </div>
  )
}
