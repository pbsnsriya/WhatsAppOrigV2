import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromWithUuIdAndDT } from "./2.WithUuIdAndDT/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/WithUuIdAndDT", routerFromWithUuIdAndDT);

export { router };