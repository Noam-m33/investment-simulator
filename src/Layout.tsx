import { Container, Typography } from "@mui/material";
import StepsBar from "./components/StepsBar";

interface LayoutProps {
  title: string;
}

export default function Layout({ title }: LayoutProps) {
  return (
    <Container sx={{ p: 5 }} maxWidth="lg">
      <Typography variant="h1" fontSize={34} fontWeight="600">
        {title}
      </Typography>
      <StepsBar activeStep={1} />
    </Container>
  );
}
