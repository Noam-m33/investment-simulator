import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./Layout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormsProvider from "./context/FormsContext";
import Pages from "./pages";

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
            <Pages />
          </Layout>
        </FormsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
