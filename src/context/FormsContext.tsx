import { createContext, ReactNode, useState } from "react";
import { ProfileFields } from "../pages/Profile";

interface FormsContext {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setProfile: (data: ProfileFields) => void;
  setInvestementAmount: (data: number) => void;
  setSelectedInvestissement: (data: SelectedInvestissement) => void;
  formData: FormData;
}

export const FormsContext = createContext<FormsContext | undefined>(undefined);

type SelectedInvestissement = "BTC" | "ETH";

interface FormData {
  profil: ProfileFields | undefined;
  investissementAmount: number;
  selectedInvestissement?: SelectedInvestissement;
}

export default function FormsProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState<FormData>({
    profil: undefined,
    investissementAmount: 1000,
    selectedInvestissement: undefined,
  });

  function setProfile(data: ProfileFields) {
    setFormData((prevState) => ({
      ...prevState,
      profil: data,
    }));
  }

  function setInvestementAmount(data: number) {
    setFormData((prevState) => ({
      ...prevState,
      investissementAmount: data,
    }));
  }
  function setSelectedInvestissement(data: SelectedInvestissement) {
    setFormData((prevState) => ({
      ...prevState,
      selectedInvestissement: data,
    }));
  }

  return (
    <FormsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        setProfile,
        setInvestementAmount,
        setSelectedInvestissement,
        formData: {
          profil: formData.profil,
          investissementAmount: formData.investissementAmount,
          selectedInvestissement: formData.selectedInvestissement,
        },
      }}
    >
      {children}
    </FormsContext.Provider>
  );
}
