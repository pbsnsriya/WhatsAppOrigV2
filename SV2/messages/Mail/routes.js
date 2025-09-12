import express from 'express';

const router = express.Router();

import { router as routerFromWithImage } from "./WithImage/routes.js";
import { router as routerFromImage } from "./Image/routes.js";

router.use("/WithImage", routerFromWithImage);
router.use("/Image", routerFromImage);

export { router };