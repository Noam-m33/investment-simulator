import { Stack, Typography, Box, Slider, ButtonBase } from "@mui/material";
import FormButtons from "../components/FormButtons";
import { useForms } from "../context/FormsContext";
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
      <Stack direction="row" gap={3} alignSelf="center" m={5}>
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
          onSubmit={() => alert("Terminé !")}
        />
      </Box>
    </Stack>
  );
}
