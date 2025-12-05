import { Store, persist } from "@t8/react-store";
import type { SerializableAppState } from "../types/SerializableAppState.ts";

export function toAppState(state: SerializableAppState) {
  return persist(new Store(state), "react-app.store");
}
