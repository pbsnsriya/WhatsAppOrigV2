import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../Controllers/entryFile.js';

import {
    GetFunc as GetFuncMiddlewares
} from '../Middlewares/entryFile.js';

router.get('/:Key', GetFuncMiddlewares, GetFunc);

export { router };