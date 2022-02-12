import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariant: true,
  },
  palette: {
    primary: {
      main: '#10A75F',
    },
    commond: {
      white: 'white',
    },
    secondary: {
      main: '#e53935',
    },
  },
  spacing: 10,
})

export default theme
