import { PersistentStore } from "@t8/react-store";
import type { SerializableAppState } from "../types/SerializableAppState.ts";

export function toAppState(state: SerializableAppState) {
  return new PersistentStore(state, "react-app.store");
}
