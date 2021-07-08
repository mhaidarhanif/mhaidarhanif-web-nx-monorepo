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
      padding: 2,
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
    nav: {
      p: 3,
      cursor: 'pointer',
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
      fontWeight: 'bold',
      fontSize: '3',
      letterSpacing: '0.1em',
      color: 'brand',
    },
  },
}

export const theme = merge(toTheme(github), customTheme)

export default theme
