import { Router } from "express";
import { render } from "./render.tsx";

export let server = Router();

server.get(["/", "/about", "/sections/:id"], render());
