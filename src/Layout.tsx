import { Container, Divider, Stack, Typography } from "@mui/material";
import StepsBar from "./components/StepsBar";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
// Generic layout for all pages to avoid code duplication
export default function Layout({ title, children }: LayoutProps) {
  return (
    <Container sx={{ p: 5, display: "flex", flexDirection: "column", gap: 5 }} maxWidth="lg">
      <Typography variant="h1" fontSize={34} fontWeight="600">
        {title}
      </Typography>
      <Divider sx={{ height: 1, backgroundColor: "#bdbdbd1f" }} />
      <Stack direction="row" gap={5}>
        <StepsBar activeStep={1} />
        <Container sx={{ padding: 0 }}>
          <Stack gap={1}>
            <Typography variant="h3" fontSize={16}>
              Étape {"1/4"}
            </Typography>
            <Typography variant="h2" fontSize={24} fontWeight="600">
              {title}
            </Typography>
            {children}
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
