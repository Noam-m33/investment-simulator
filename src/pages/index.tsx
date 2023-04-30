import { useForms } from "../context/FormsContext";
import Budget from "./Budget";
import Profile from "./Profile";
import Recommandation from "./Recommandation";

export default function Pages() {
  const { currentStep } = useForms();
  console.log(currentStep);
  return (
    <>
      {currentStep === 1 && <Profile />}
      {currentStep === 2 && <Budget />}
      {currentStep === 3 && <Recommandation />}
    </>
  );
}
