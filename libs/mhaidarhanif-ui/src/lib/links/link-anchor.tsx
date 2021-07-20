import { Link } from 'theme-ui'

interface LinkProps {
  href: string
  children: string
}

export const LinkAnchor = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      sx={{ fontWeight: 'bold' }}
    >
      {children}
    </Link>
  )
}

export default LinkAnchor
