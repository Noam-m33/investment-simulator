import {
  Box,
  Stack,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { Insights } from "@mui/icons-material";

// Custom style connector to align the connector with the Icon who as reverse direction
// As Icons are on the left and mui does'nt provide a way to change it natively
const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.root}`]: {
    display: "flex",
    flexDirection: "row-reverse",
    paddingRight: 33,
  },
}));

interface Step {
  title: string;
  subtitle: string;
  Icon: SvgIconComponent;
}

// Separate the steps data in a const to be able to map over it
// To have a more genereic component and easier to maintain
const steps: Step[] = [
  {
    title: "Profil",
    subtitle: "Vos informations",
    Icon: Person,
  },
  {
    title: "Budget",
    subtitle: "Votre investissement",
    Icon: AccountBalanceWallet,
  },
  {
    title: "Recommandations",
    subtitle: "Conseil personnalisé",
    Icon: Insights,
  },
];

export default function StepsBar({ activeStep }: { activeStep: number }) {
  return (
    <Stepper orientation="vertical" activeStep={activeStep} connector={<CustomConnector />}>
      {steps.map(({ title, subtitle, Icon }, i) => {
        const isActive = i + 1 === activeStep;
        const isCompleted = i + 1 < activeStep;
        const backgroundColor = isActive ? "#62C98E" : isCompleted ? "#62c98e70" : "#9e9e9e40";
        return (
          <Step key={i}>
            <StepLabel
              sx={{ flexDirection: "row-reverse", gap: 2 }}
              StepIconComponent={() => (
                <Box
                  sx={{
                    color: "grey",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    height: 50,
                    width: 50,
                    backgroundColor: backgroundColor,
                    borderRadius: 40,
                  }}
                >
                  <Icon sx={{ color: "white", height: 30 }} />
                </Box>
              )}
            >
              <Stack alignItems="flex-end">
                <Typography textAlign="right" fontWeight="600" color="white">
                  {title}
                </Typography>
                <Typography textAlign="right" color="#e0e0e0">
                  {subtitle}
                </Typography>
              </Stack>
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
