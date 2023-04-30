import { useForms } from "../hooks/useForms";
import Budget from "./Budget";
import Profile from "./Profile";
import Recommandation from "./Recommandation";
import Result from "./Result";

export default function Pages() {
  const { currentStep } = useForms();

  return (
    <>
      {currentStep === 1 && <Profile />}
      {currentStep === 2 && <Budget />}
      {currentStep === 3 && <Recommandation />}
      {currentStep === 4 && <Result />}
    </>
  );
}
