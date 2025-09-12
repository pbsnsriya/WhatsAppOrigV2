import express from 'express';

const router = express.Router();

import { router as routerFromGenerate } from "./Generate/routes.js";
import { router as routerFromLogOut } from "./Logout/routes.js";

router.use("/Generate", routerFromGenerate);
router.use("/Logout", routerFromLogOut);

export { router };