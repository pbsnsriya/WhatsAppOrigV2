import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromBoth } from "./2.Both/routes.js";
import { router as routerFromFieldsOnly } from "./3.FieldsOnly/routes.js";
import { router as routerFromTitlesOnly } from "./4.TitlesOnly/routes.js";

router.use("/AsIs", routerFromAsIs)
router.use("/FieldsOnly", routerFromFieldsOnly);
router.use("/TitlesOnly", routerFromTitlesOnly);
router.use("/Both", routerFromBoth);

export { router };