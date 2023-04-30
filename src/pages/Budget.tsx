import { Box, Slider, Stack, Typography } from "@mui/material";
import { useForms } from "../hooks/useForms";
import { useState } from "react";
import FormButtons from "../components/FormButtons";

export default function Budget() {
  const { formData, setInvestementAmount, setCurrentStep } = useForms();
  // Use the formData.investissementAmount as the default value for the slider
  // Using useState to avoid changing the default value on a already mounted component
  const [defaultValue] = useState(formData.investissementAmount);
  return (
    <Stack>
      <Typography variant="h2" fontSize={24} fontWeight="600">
        Sélectionnez votre budget
      </Typography>
      <Box paddingY={10} paddingX={5}>
        <Slider
          aria-label="Budget"
          defaultValue={defaultValue}
          onChangeCommitted={(_, value) => setInvestementAmount(Number(value))}
          min={1000}
          max={100000}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `${value} €`}
          step={250}
          getAriaValueText={(value) => `${value} €`}
          marks={[
            { value: 1000, label: "1 000 €" },
            { value: 100000, label: "100 000 €" },
          ]}
        />
      </Box>
      <Box alignSelf="end">
        <FormButtons
          displayGoBack
          onGoBack={() => setCurrentStep(1)}
          onSubmit={() => setCurrentStep(3)}
        />
      </Box>
    </Stack>
  );
}
