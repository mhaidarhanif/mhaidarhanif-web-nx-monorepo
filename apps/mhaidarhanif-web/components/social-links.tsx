import { Flex } from 'theme-ui'

import { Links } from '@mhaidarhanif-platform/mhaidarhanif-ui'

export const socialLinks = [
  {
    text: 'Message',
    href: 'https://airtable.com/shrMKW7nqUdqTnjWK',
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/mhaidarhanif',
  },
  {
    text: 'Polywork',
    href: 'https://poly.work/haidar',
  },
  {
    text: 'LinkedIn',
    href: 'https://linkedin.com/in/mhaidarhanif',
  },
  {
    text: 'YouTube',
    href: 'https://youtube.com/mhaidarhanif',
  },
  {
    text: 'Figma',
    href: 'https://figma.com/@mhaidarhanif',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/mhaidarhanif',
  },
  {
    text: 'GitLab',
    href: 'https://gitlab.com/mhaidarhanif',
  },
  {
    text: 'Dev.to',
    href: 'https://dev.to/mhaidarhanif',
  },
  {
    text: 'Hashnode',
    href: 'https://hashnode.com/mhaidarhanif',
  },
]

export const SocialLinks = () => {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
      }}
    >
      <Links links={socialLinks} />
    </Flex>
  )
}

export default SocialLinks
