import { useContext } from "react";
import { CounterContext } from "../context/ConterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};
