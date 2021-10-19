import { useEffect } from "react";
import InitializeWS from "./config/pusher";
import initializeFirebase from "./config/firebase";
import Main from "./components/main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  useEffect(() => {
    //Load configuration
    initializeFirebase();
    InitializeWS();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
