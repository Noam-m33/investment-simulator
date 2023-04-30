import { Box, Stack, Typography } from "@mui/material";
import { useForms } from "../hooks/useForms";
import { ProfileFields } from "./Profile";
import usePrice from "../hooks/usePrice";
import ETHImage from "../assets/ethereum-image.png";
import CardButton from "../components/CardButton";
import FormButtons from "../components/FormButtons";

export default function Result() {
  const {
    formData: { profil, investissementAmount, selectedInvestissement },
    resetForm,
  } = useForms();
  const { data, error } = usePrice();
  console.log(data?.BTC, error);
  const { gender, name, birthDate } = profil as ProfileFields;
  const genderText = gender === "Homme" ? "Mr" : "Mme";
  const cryptoName = selectedInvestissement === "BTC" ? "Bitcoin" : "Ethereum";
  const currentPrice = selectedInvestissement === "BTC" ? data?.BTC : data?.ETH;
  const age = calculateAge(birthDate);

  function calculateAge(birthdate: string) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // TODO: Get real exchnage rate
  function euroToCrypto(amount: number, currentPrice: number) {
    const amountInUSD = amount * 1.11;
    return (amountInUSD / currentPrice).toFixed(2);
  }

  // Because we need to make some money too ;)
  function redirectToAffiliateLink() {
    const url = `https://www.binance.com/fr/trade/${selectedInvestissement}_USDT`;
    window.open(url, "_blank");
  }

  return (
    <Stack gap={5}>
      <Stack
        sx={{ width: "100%", minHeight: 150 }}
        direction="row"
        justifyContent={"center"}
        alignSelf="center"
      >
        <CardButton
          img={ETHImage}
          title="ETH"
          subtitle={data?.ETH ? `${data?.ETH}$` : "Loading..."}
          onClick={() => console.log("ETH")}
        />
      </Stack>
      <Typography variant="h2" fontSize={24} fontWeight="600">
        Récapitulatif de votre investissement
      </Typography>
      <Typography>
        {genderText}. {name}, au vu de votre profil et de votre âge ({age} ans), nous vous
        recommandons l'achat de {cryptoName} ({selectedInvestissement}) pour un montant de{" "}
        {investissementAmount}€ vous obtiendrez avec un prix actuel de {currentPrice}$ par unité de{" "}
        {cryptoName} un total de {euroToCrypto(investissementAmount, currentPrice as number)} unités
        de {cryptoName}.
      </Typography>
      <Stack alignItems={"center"}>
        <FormButtons
          primaryLabel="Acheter sur Binance"
          displayGoBack
          goBackLabel="Reinitialiser"
          onGoBack={resetForm}
          onSubmit={redirectToAffiliateLink}
        />
      </Stack>
    </Stack>
  );
}
