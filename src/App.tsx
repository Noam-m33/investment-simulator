import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Layout title="Simulateur d'investissement 📈">
          <Profile />
        </Layout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
