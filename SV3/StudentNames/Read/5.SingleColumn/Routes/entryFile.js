import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';
import {
    StartFunc as StartFuncMiddlewares
} from '../Middlewares/entryFile.js';

router.get('/:ColumnName', StartFuncMiddlewares, postFilterDataFromBodyFunc);

export { router };