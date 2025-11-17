import { hydrateRoot } from "react-dom/client";
import { toAppState } from "../utils/toAppState.ts";
import { App } from "./App/index.tsx";

hydrateRoot(document, <App state={toAppState(window._mainState)} />);
