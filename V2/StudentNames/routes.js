import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromInsert } from "./Insert/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromReadSchema } from "./ReadSchema/routes.js";
import { router as routerFromGroupBy } from "./GroupBy/routes.js";
import { router as routerFromAggregateFunctions } from "./AggregateFunctions/routes.js";
import { router as routerFromSubTable } from "./SubTable/routes.js";
import { router as routerFromFilter } from "./Filter/routes.js";
import { router as routerFromAddWithDefault } from "./AddWithDefault/routes.js";
import { router as routerFromSubTableOnArray } from "./SubTableOnArray/routes.js";
import { router as routerFromSubTableOnObj } from "./SubTableOnObj/routes.js";
import { router as routerFromMail } from "./Mail/routes.js";

router.use("/Read", routerFromRead);
router.use("/Insert", routerFromInsert);
router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);
router.use("/ReadSchema", routerFromReadSchema);
router.use("/GroupBy", routerFromGroupBy);
router.use("/AggregateFunctions", routerFromAggregateFunctions);

router.use("/SubTable", routerFromSubTable);//Sub Table CRUD
router.use("/Filter", routerFromFilter);
router.use("/AddWithDefault", routerFromAddWithDefault);
router.use("/SubTableOnArray", routerFromSubTableOnArray);
router.use("/SubTableOnObj", routerFromSubTableOnObj);
router.use("/Mail", routerFromMail);

export { router };