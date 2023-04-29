import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormsProvider from "./context/FormsContext";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormsProvider>
          <CssBaseline />
          <Layout>
            <Profile />
          </Layout>
        </FormsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
