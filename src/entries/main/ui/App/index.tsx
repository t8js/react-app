import { Router } from "@t8/react-router";
import type { AppState } from "../../types/AppState.ts";
import { AppContext } from "../AppContext/index.ts";
import { Content } from "./Content.tsx";

export type AppProps = {
  href?: string;
  state: AppState;
};

export const App = ({ href, state }: AppProps) => (
  <Router href={href}>
    <AppContext.Provider value={state}>
      <Content />
    </AppContext.Provider>
  </Router>
);
