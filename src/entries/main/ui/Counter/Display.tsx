import { useStore } from "@t8/react-store";
import { useContext } from "react";
import { AppContext } from "../AppContext/index.ts";

export const Display = () => {
  let [state] = useStore(useContext(AppContext));

  return <strong>{state.counter}</strong>;
};
