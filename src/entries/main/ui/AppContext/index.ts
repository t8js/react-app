import { createContext } from "react";
import type { AppState } from "../../types/AppState.ts";

export const AppContext = createContext(null as unknown as AppState);
