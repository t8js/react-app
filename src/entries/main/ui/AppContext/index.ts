import { createContext } from "react";
import type { AppState } from "../../types/AppState";

export const AppContext = createContext(null as unknown as AppState);
