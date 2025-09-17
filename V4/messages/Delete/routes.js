import express from 'express';

const router = express.Router();

import { router as routerFromWithPk } from "./1.WithKey/routes.js";

router.use("/WithKey", routerFromWithPk);

export { router };