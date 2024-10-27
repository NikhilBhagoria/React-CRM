// theme.js
import { extendTheme } from '@chakra-ui/react'

// Define color scales with the primary color
const colors = {
  primary: {
    50: '#e6f2ff', // Lightest shade
    100: '#cce0ff',
    200: '#99c2ff',
    300: '#66a3ff',
    400: '#3385ff',
    500: '#3f8cff', // Main color
    600: '#357aff',
    700: '#2c6aff',
    800: '#2259ff',
    900: '#1a4aff', // Darkest shade
  },
  secondary: {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722', // Main color
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
  },
  accent: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107', // Main color
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
  },
}

// Create a theme with the custom colors
const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: '#ececf5', // Global background color
        color: 'gray.800', // Global text color
      },
    },
  },
})

export default theme
