import { toTheme } from '@theme-ui/typography'
import github from 'typography-theme-github'
import merge from 'deepmerge'

export const customTheme = {
  breakpoints: ['50em', '64em'],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Epilogue, inherit, sans-serif',
    monospace: 'Menlo, monospace',
    modes: {
      laser: {
        heading: 'serif',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'text.heading',
      fontSize: [6, 7, 8],
      fontWeight: 'display',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
    versionNumber: {
      fontSize: 1,
      opacity: 0.5,
    },
  },
  colors: {
    brand: '#0aa',
    text: '#111',
    background: '#fff',
    backgroundAlt: '#efefef',
    primary: '#0aa',
    primaryHover: '#1cc',
    secondary: '#aca',
    secondaryHover: '#adb',
    comment: '#eee',
    keyword: '#c0f',
    modes: {
      laser: {
        brand: 'hsl(10, 80%, 50%)',
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        backgroundAlt: 'hsl(10, 10%, 95%)',
        primary: 'hsl(10, 80%, 50%)',
        primaryHover: 'hsl(10, 80%, 70%)',
        secondary: 'hsl(10, 60%, 50%)',
        secondaryHover: 'hsl(10, 60%, 70%)',
        highlight: 'hsl(10, 40%, 90%)',
        muted: 'hsl(10, 20%, 94%)',
      },
      dark: {
        brand: '#0cc',
        text: '#ddd',
        background: '#111',
        backgroundAlt: '#222',
        primary: '#0cc',
        primaryHover: '#5ff',
        secondary: '#adb',
        secondaryHover: '#cfd',
        comment: '#222',
      },
      midnight: {
        brand: '#F6E05E',
        text: '#fff',
        background: '#000',
        backgroundAlt: '#111',
        primary: '#F6E05E',
        primaryHover: '#FAF089',
        secondary: '#F6AD55',
        secondaryHover: '#FBD38D',
        comment: '#222',
      },
    },
  },
  cards: {
    primary: {
      padding: 4,
      bg: 'backgroundAlt',
      borderRadius: 10,
    },
  },
  buttons: {
    primary: {
      fontWeight: 'bold',
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryHover',
      },
    },
    secondary: {
      fontWeight: 'bold',
      cursor: 'pointer',
      color: 'background',
      bg: 'secondary',
      '&:hover': {
        bg: 'secondaryHover',
      },
    },
    toggle: {
      px: 2,
      py: 1,
      borderRadius: 'full',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryHover',
      },
    },
  },
  links: {
    button: {
      display: 'contents',
    },
    nav: {
      p: [2, 3],
      cursor: 'pointer',
    },
    social: {
      py: 0.5,
      mr: 4,
      my: 2,
      color: 'primary',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: 'comment',
      '&:hover': {
        borderColor: 'primary',
      },
    },
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: '400',
    },
    display: {
      variant: 'textStyles.heading',
      fontWeight: '400',
      fontSize: '48px',
      mb: 4,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    brand: {
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '3',
      letterSpacing: '0.1em',
      color: 'brand',
    },
    h1: {
      variant: 'textStyles.display',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 4,
      mb: 4,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'primaryHover',
      },
    },
    p: {
      margin: '0 0 1em',
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    img: {
      maxWidth: '100%',
    },
  },
  prism: {
    '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
      color: 'comment',
    },
    '.comment': {
      fontStyle: 'italic',
    },
    '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable':
      {
        color: 'keyword',
      },
    '.atrule,.attr-value,.keyword': {
      color: 'primary',
    },
    '.selector,.attr-name,.string,.char,.builtin,.inserted': {
      color: 'secondary',
    },
  },
}

export const theme = merge(toTheme(github), customTheme)

export default theme
