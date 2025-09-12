import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

import { StartFunc as middlewaresgetFilterDataFromBodyFunc } from "../Middlewares/entryFile.js";

router.get('/:ColumnName', middlewaresgetFilterDataFromBodyFunc, postFilterDataFromBodyFunc);

export { router };