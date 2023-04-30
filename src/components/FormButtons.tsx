import { Button, Stack, styled } from "@mui/material";
interface FormButtonsProps {
  displayGoBack?: boolean;
  goBackLabel?: string;
  primaryLabel?: string;
  disabledNextStep?: boolean;
  onSubmit: () => void;
  onGoBack?: () => void;
}

const PrimaryButton = styled(Button)(() => ({
  backgroundColor: "#62C98E",
  color: "white",
  fontWeight: 600,
  padding: 10,
  minWidth: 120,
  borderRadius: 30,

  "&:hover": {
    backgroundColor: "#3caf6d",
  },

  "&:disabled": {
    backgroundColor: "#62C98E70",
  },
}));

export default function FormButtons({
  displayGoBack,
  primaryLabel = "Suivant",
  goBackLabel = "Retour",
  disabledNextStep,
  onSubmit,
  onGoBack,
}: FormButtonsProps) {
  return (
    <Stack flexDirection="row" gap={3}>
      {displayGoBack && <Button onClick={onGoBack}>{goBackLabel}</Button>}
      <PrimaryButton onClick={onSubmit} disabled={disabledNextStep}>
        {primaryLabel}
      </PrimaryButton>
    </Stack>
  );
}
