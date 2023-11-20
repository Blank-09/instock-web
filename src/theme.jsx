import { createTheme } from '@mui/material/styles'
import { red, grey } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#190482',
    },
    secondary: {
      main: '#1976d2',
    },
    tertiary: {
      main: '#fff',
    },
    text: {
      primary: grey[900],
      secondary: grey[500],
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
