import { useStore } from "@t8/react-store";
import { useContext } from "react";
import { AppContext } from "../AppContext/index.ts";

export const PlusButton = () => {
  let [, setState] = useStore(useContext(AppContext), false);

  let handleClick = () => {
    setState((state) => ({
      ...state,
      counter: state.counter + 1,
    }));
  };

  return <button onClick={handleClick}>+</button>;
};
