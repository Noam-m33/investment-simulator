import { Container, Divider, Stack, Typography } from "@mui/material";
import StepsBar from "./components/StepsBar";
import { useForms } from "./context/FormsContext";

interface LayoutProps {
  children: React.ReactNode;
}
// Generic layout for all pages to avoid code duplication
export default function Layout({ children }: LayoutProps) {
  const { currentStep } = useForms();
  console.log(currentStep);
  return (
    <Container sx={{ p: 5, display: "flex", flexDirection: "column", gap: 5 }} maxWidth="lg">
      <Typography variant="h1" fontSize={34} fontWeight="600">
        Simulateur d'investissement 📈
      </Typography>
      <Divider sx={{ height: 1, backgroundColor: "#bdbdbd1f" }} />
      <Stack direction="row" gap={5}>
        <StepsBar activeStep={currentStep} />
        <Container sx={{ padding: 0 }}>
          <Stack gap={1}>
            <Typography variant="h3" fontSize={16}>
              Étape {currentStep} / 3
            </Typography>
            {children}
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
