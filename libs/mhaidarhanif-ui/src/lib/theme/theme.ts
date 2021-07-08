export const theme = {
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
    text: '#111',
    background: '#fff',
    primary: '#0aa',
    primaryHover: '#0bb',
    secondary: '#aca',
    secondaryHover: '#adb',
    modes: {
      dark: {
        text: '#ddd',
        background: '#111',
        primary: '#0cc',
        primaryHover: '#2ff',
        secondary: '#adb',
        secondaryHover: '#cfd',
      },
      midnight: {
        text: '#fff',
        background: '#000',
        primary: '#0cc',
        primaryHover: '#2ff',
        secondary: '#adb',
        secondaryHover: '#cfd',
      },
      laser: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        primaryHover: 'hsl(10, 80%, 60%)',
        secondary: 'hsl(10, 60%, 50%)',
        secondaryHover: 'hsl(10, 60%, 60%)',
        highlight: 'hsl(10, 40%, 90%)',
        purple: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
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
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
}

export default theme
