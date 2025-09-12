import express from 'express';

const router = express.Router();

import { router as routerFromCount } from "./1.Count/routes.js";
import { router as routerFromSum } from "./2.Sum/routes.js";
import { router as routerFromMax } from "./3.Max/routes.js";
import { router as routerFromMin } from "./4.Min/routes.js";
import { router as routerFromAverage } from "./5.Average/routes.js";

router.use("/Count", routerFromCount);
router.use("/Sum", routerFromSum);
router.use("/Max", routerFromMax);
router.use("/Min", routerFromMin);
router.use("/Average", routerFromAverage);

export { router };