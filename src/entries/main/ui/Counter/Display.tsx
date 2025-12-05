import { ClientOnly } from "@t8/react-client-only";
import { useStore } from "@t8/react-store";
import { useContext } from "react";
import { AppContext } from "../AppContext/index.ts";

export const Display = () => {
  let [state] = useStore(useContext(AppContext));

  // Using <ClientOnly> to avoid flashing server-rendered content
  // before retrieving the store state persistent across page reloads.
  // (Without persistence, <ClientOnly> would be unnecessary here.)
  return (
    <strong>
      <ClientOnly>{state.counter}</ClientOnly>
    </strong>
  );
};
