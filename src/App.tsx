import { Container } from "@mui/material";
import Profile from "./pages/Profile";

function App() {
  return (
    <Container sx={{ p: 5 }} maxWidth="lg">
      <h1>Simulateur d'investissement</h1>
      <Profile />;
    </Container>
  );
}

export default App;
