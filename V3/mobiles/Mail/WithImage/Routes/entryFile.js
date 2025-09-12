import express from 'express';
import bodyparser from "body-parser";

var router = express.Router();

import {
    postFunc
} from '../Controllers/entryFile.js';

import { StartFunc as StartFuncFromMiddlewares } from "../Middlewares/entryFile.js";

router.use(bodyparser.json());

router.post('/', StartFuncFromMiddlewares.single("image"), postFunc);

export { router };