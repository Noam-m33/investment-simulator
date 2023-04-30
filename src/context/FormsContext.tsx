import { createContext, ReactNode, useContext, useState } from "react";
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
  profil: ProfileFields | object;
  investissementAmount: number;
  selectedInvestissement?: SelectedInvestissement;
}

export default function FormsProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState<FormData>({
    profil: {},
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

export const useForms = () => {
  const context = useContext(FormsContext);
  if (context === undefined) {
    throw new Error("useForms must be used within a FormsProvider");
  }
  return context;
};
