import './App.css'
import MaterialUI from './MaterialUI'
import WeatherApp from './WeatherApp'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation of MUI
        },
      },
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>

      <WeatherApp />
    
    </ThemeProvider>
  )
}

export default App
