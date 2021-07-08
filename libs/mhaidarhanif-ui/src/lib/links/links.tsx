import { Link } from 'theme-ui'

export interface LinkProps {
  href: string
  text: string
}

export interface LinksProps {
  links: LinkProps[]
  columns?: number
}

export function Links({ links = [] }: LinksProps) {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.text}
            variant="social"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.text}
          </Link>
        )
      })}
    </>
  )
}

export default Links
