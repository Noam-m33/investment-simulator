import { Container, Stack, Typography } from "@mui/material";
import { useForms } from "../context/FormsContext";
import { ProfileFields } from "./Profile";

export default function Result() {
  const {
    formData: { profil, investissementAmount, selectedInvestissement },
  } = useForms();
  const { gender, name, birthDate } = profil as ProfileFields;
  const genderText = gender === "Homme" ? "Mr" : "Mme";
  const cryptoName = selectedInvestissement === "BTC" ? "Bitcoin" : "Ethereum";
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

  return (
    <Stack gap={5}>
      <Typography variant="h2" fontSize={24} fontWeight="600">
        Récapitulatif de votre investissement
      </Typography>
      <Typography>
        {genderText}. {name}, au vu de votre profil et de votre âge ({age} ans), nous vous
        recommandons l'achat de {cryptoName} ({selectedInvestissement}) pour un montant de{" "}
        {investissementAmount}€ vous obtiendrez avec un prix actuel de {1000} par unité de{" "}
        {cryptoName} un total de {investissementAmount / 1000} unités de {cryptoName}.
      </Typography>
    </Stack>
  );
}
