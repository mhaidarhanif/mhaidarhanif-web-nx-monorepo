import { Flex } from 'theme-ui'

import { Links } from '@mhaidarhanif-platform/mhaidarhanif-ui'

const socialLinks = [
  {
    text: 'Message',
    href: 'https://google.com',
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
        p: 3,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Links links={socialLinks} />
    </Flex>
  )
}

export default SocialLinks
