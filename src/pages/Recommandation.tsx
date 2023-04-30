import { Stack, Typography, Box } from "@mui/material";
import FormButtons from "../components/FormButtons";
import { useForms } from "../hooks/useForms";
import BTCImage from "../assets/btc-image.png";
import ETHImage from "../assets/ethereum-image.png";
import CardButton from "../components/CardButton";

export default function Recommandation() {
  const { formData, setSelectedInvestissement, setCurrentStep } = useForms();
  return (
    <Stack>
      <Typography variant="h2" fontSize={24} fontWeight="600">
        Sélectionnez une option
      </Typography>
      <Stack
        sx={{ width: "100%", minHeight: 150 }}
        direction="row"
        justifyContent={"center"}
        gap={3}
        alignSelf="center"
        m={10}
      >
        <CardButton
          img={BTCImage}
          selected={formData.selectedInvestissement === "BTC"}
          title="BTC"
          onClick={() => setSelectedInvestissement("BTC")}
        />
        <CardButton
          img={ETHImage}
          selected={formData.selectedInvestissement === "ETH"}
          title="ETH"
          onClick={() => setSelectedInvestissement("ETH")}
        />
      </Stack>
      <Box alignSelf="end">
        <FormButtons
          end
          disabledNextStep={!formData.selectedInvestissement}
          displayGoBack
          onGoBack={() => setCurrentStep(2)}
          onSubmit={() => setCurrentStep(4)}
        />
      </Box>
    </Stack>
  );
}
