import { useContext } from "react";
import { FormsContext } from "../context/FormsContext";

export const useForms = () => {
  const context = useContext(FormsContext);
  if (context === undefined) {
    throw new Error("useForms must be used within a FormsProvider");
  }
  return context;
};
