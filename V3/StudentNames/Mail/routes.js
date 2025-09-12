import express from 'express';

const router = express.Router();

import { router as routerFromWithImage } from "./WithImage/routes.js";

router.use("/WithImage", routerFromWithImage);

export { router };