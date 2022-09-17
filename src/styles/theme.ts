import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  },
  colors: {
    gray: {
      "900": "#181823 ",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "480": "#79709A",
      "300": "#969986",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
})