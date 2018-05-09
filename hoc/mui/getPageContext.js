/* eslint-disable no-underscore-dangle */
import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import red from 'material-ui/colors/red'
import grey from 'material-ui/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: red.A200,
      main: red.A700,
      dark: red[900],
    },
    secondary: {
      light: blue[300],
      main: blue[800],
      dark: blue[900],
    },
    default: {
      light: grey[100],
      main: grey[50],
      dark: grey[200],
    },
  },
})

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
