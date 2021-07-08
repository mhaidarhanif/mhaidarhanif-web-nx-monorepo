import { toTheme } from '@theme-ui/typography'
import github from 'typography-theme-github'
import merge from 'deepmerge'

export const customTheme = {
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
    caps: {
      // textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
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
  },
  colors: {
    brand: '#0aa',
    text: '#111',
    background: '#fff',
    primary: '#0aa',
    primaryHover: '#0bb',
    secondary: '#aca',
    secondaryHover: '#adb',
    comment: '#999',
    keyword: '#c0f',
    modes: {
      dark: {
        brand: '#0cc',
        text: '#ddd',
        background: '#111',
        primary: '#0cc',
        primaryHover: '#2ff',
        secondary: '#adb',
        secondaryHover: '#cfd',
      },
      midnight: {
        brand: '#F6E05E',
        text: '#fff',
        background: '#000',
        primary: '#F6E05E',
        primaryHover: '#FAF089',
        secondary: '#F6AD55',
        secondaryHover: '#FBD38D',
      },
      laser: {
        brand: 'hsl(10, 80%, 50%)',
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        primaryHover: 'hsl(10, 80%, 60%)',
        secondary: 'hsl(10, 60%, 50%)',
        secondaryHover: 'hsl(10, 60%, 60%)',
        highlight: 'hsl(10, 40%, 90%)',
        muted: 'hsl(10, 20%, 94%)',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 3px 1px rgba(0, 0, 0, 0.5)',
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
      p: 3,
      cursor: 'pointer',
    },
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: '400',
      lineHeight: 'heading',
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
        color: 'secondary',
      },
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
