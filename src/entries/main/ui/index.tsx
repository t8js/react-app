import { hydrateRoot } from "react-dom/client";
import { toAppState } from "../utils/toAppState";
import { App } from "./App";

hydrateRoot(document, <App state={toAppState(window._mainState)} />);
