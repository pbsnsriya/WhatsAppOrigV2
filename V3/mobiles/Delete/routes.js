import express from 'express';

const router = express.Router();

import { router as routerFromWithPk } from "./1.WithPk/routes.js";

router.use("/WithPk", routerFromWithPk);

export { router };