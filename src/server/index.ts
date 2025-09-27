import { createApp, unhandledError, unhandledRoute } from "@t8/webapp-core";
import { static as expressStatic } from "express";
import { entries } from "./entries";

let app = createApp();

app.use(
  expressStatic("src/public"),
  entries,
  unhandledRoute(),
  unhandledError(),
);
