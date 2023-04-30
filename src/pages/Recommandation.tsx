import { Stack, Typography, Box } from "@mui/material";
import FormButtons from "../components/FormButtons";
import { useForms } from "../hooks/useForms";
import BTCImage from "../assets/btc-image.png";
import ETHImage from "../assets/ethereum-image.png";
import CardButton from "../components/CardButton";
import usePrice from "../hooks/usePrice";

export default function Recommandation() {
  const { formData, setSelectedInvestissement, setCurrentStep } = useForms();
  const { data } = usePrice();
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
        m={7}
      >
        <CardButton
          img={BTCImage}
          selected={formData.selectedInvestissement === "BTC"}
          title="BTC"
          subtitle={data?.BTC ? `${data?.BTC}$` : "Loading..."}
          onClick={() => setSelectedInvestissement("BTC")}
        />
        <CardButton
          img={ETHImage}
          selected={formData.selectedInvestissement === "ETH"}
          title="ETH"
          subtitle={data?.ETH ? `${data?.ETH}$` : "Loading..."}
          onClick={() => setSelectedInvestissement("ETH")}
        />
      </Stack>
      <Box alignSelf="end">
        <FormButtons
          primaryLabel="Terminer"
          disabledNextStep={!formData.selectedInvestissement}
          displayGoBack
          onGoBack={() => setCurrentStep(2)}
          onSubmit={() => setCurrentStep(4)}
        />
      </Box>
    </Stack>
  );
}
