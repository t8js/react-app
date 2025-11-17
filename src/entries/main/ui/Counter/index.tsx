import { Display } from "./Display.tsx";
import { MinusButton } from "./MinusButton.tsx";
import { PlusButton } from "./PlusButton.tsx";
import "./index.css";

export const Counter = () => (
  <p className="counter">
    <MinusButton /> <Display /> <PlusButton />
  </p>
);
