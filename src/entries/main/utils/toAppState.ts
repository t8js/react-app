import { PersistentStore } from "@t8/persistent-store";
import type { SerializableAppState } from "../types/SerializableAppState.ts";

export function toAppState(state: SerializableAppState) {
  return new PersistentStore(state, { key: "react-app.store" });
}
