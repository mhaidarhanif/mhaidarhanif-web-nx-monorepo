export default {
  fonts: {
    body: 'sans-serif',
    heading: 'sans-serif',
    monospace: 'monospace',
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
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
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
}
