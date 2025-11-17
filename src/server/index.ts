import { createApp, unhandledError, unhandledRoute } from "@t8/webapp-core";
import { static as expressStatic } from "express";

let { entries } = await import("./entries.ts");

let app = createApp();

app.use(
  expressStatic("src/public"),
  entries,
  unhandledRoute(),
  unhandledError(),
);
