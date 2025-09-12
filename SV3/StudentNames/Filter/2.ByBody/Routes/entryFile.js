import express from 'express';

var router = express.Router();
import bodyparser from "body-parser";

import {
    PostFunc
} from '../Controllers/entryFile.js';

import { StartFunc as StartFuncFromMiddlewares } from "../Middlewares/entryFile.js";
router.use(bodyparser.json());

router.post('/', StartFuncFromMiddlewares, PostFunc);

export { router };