import express from 'express';
const router = express.Router();

import { router as routerFromRowFilter } from "./1.RowFilter/routes.js";
import { router as routerFromByKeyAndValue } from "./2.ByKeyAndValue/routes.js";
import { router as routerFromByBody } from "./2.ByBody/routes.js";

router.use("/RowFilter", routerFromRowFilter);
router.use("/ByKeyAndValue", routerFromByKeyAndValue);
router.use("/ByBody", routerFromByBody);

export { router };