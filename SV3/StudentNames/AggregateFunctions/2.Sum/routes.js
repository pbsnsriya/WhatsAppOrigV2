import express from 'express';
const router = express.Router();

import { router as routerFromMin } from './Routes/entryFile.js';

router.use('/', routerFromMin);  // mounts at /Min/:columnName

export { router };
