import { Router } from "@t8/react-router";
import type { AppState } from "../../types/AppState.ts";
import { AppContext } from "../AppContext/index.ts";
import { Content } from "./Content.tsx";

export type AppProps = {
  state: AppState;
  location?: string;
};

export const App = ({ state, location }: AppProps) => (
  <Router location={location}>
    <AppContext.Provider value={state}>
      <Content />
    </AppContext.Provider>
  </Router>
);
