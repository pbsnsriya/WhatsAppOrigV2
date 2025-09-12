import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './Routes/entryFile.js';

router.use('/', routergetFuncs);

export { router };