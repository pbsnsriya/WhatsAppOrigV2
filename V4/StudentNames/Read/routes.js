import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromValueByKey } from "./2.ValueByKey/routes.js";
import { router as routerFromKeysOnly } from "./3.KeysOnly/routes.js";
import { router as routerFromValuesOnly } from "./4.ValuesOnly/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/ValueByKey", routerFromValueByKey);
router.use("/KeysOnly", routerFromKeysOnly);
router.use("/ValuesOnly", routerFromValuesOnly);

export { router };