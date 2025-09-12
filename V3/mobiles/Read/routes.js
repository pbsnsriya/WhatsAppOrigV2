import express from 'express';
const router = express.Router();

import { router as routerFromAsIs } from "./1.AsIs/routes.js";
import { router as routerFromRowDataWithPk } from "./2.RowDataWithPk/routes.js";
import { router as routerFromSelColsAsArray } from "./3.SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./4.SelColumns/routes.js";
import { router as routerFromSingleColumn } from "./5.SingleColumn/routes.js";
import { router as routerFromSetSingleColumn } from "./6.SetSingleColumn/routes.js";
import { router as routerFromKeyCount } from "./7.KeyCount/routes.js";
import { router as routerFromMaxRow } from "./8.MaxRow/routes.js";

router.use("/AsIs", routerFromAsIs);//return all original data
router.use("/RowDataWithPk", routerFromRowDataWithPk);//return a row using pk
router.use("/SelColsAsArray", routerFromSelColsAsArray);//returns selected col as an array of values
router.use("/SelColumns", routerFromSelColumns);// returns selected col as an object
router.use("/SingleColumn", routerFromSingleColumn);//returns all values from a col
router.use("/SetSingleColumn", routerFromSetSingleColumn);// returns unique values from a single col
router.use("/KeyCount", routerFromKeyCount);//returns count of each keys/value in a col
router.use("/MaxRow", routerFromMaxRow);//Max Row


export { router };