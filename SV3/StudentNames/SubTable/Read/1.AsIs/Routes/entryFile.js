import express from 'express';

var router = express.Router();
import { GetFunc as GetFuncMiddlewares} from '../Middlewares/entryFile.js';

import {
    GetFunc
} from '../Controllers/entryFile.js';

router.get('/:RowIndex/:KeyName',GetFuncMiddlewares, GetFunc);

export { router };