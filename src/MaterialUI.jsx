import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
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

export default function MaterialUI() {
    
    let handleClick = () => {
        console.log("Message sent!");
    };

    return (
        <ThemeProvider theme={theme}>
            <h2>Material UI Demo</h2>
            <Button variant="contained" color="success" size="small" endIcon={<SendIcon />} onClick={handleClick}>
            Send
            </Button>

            <br></br>
            <br></br>

            <Button variant="contained" onClick={handleClick} disabled>
            Click Me!
            </Button>

            <br></br>
            <br></br>

            <Alert severity="warning">Message will not be sent by disabled button!</Alert>
        </ThemeProvider>
    );
}