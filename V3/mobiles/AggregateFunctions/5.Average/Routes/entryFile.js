import express from 'express';
const router = express.Router();

import { GetAverageFunc } from '../Controllers/entryFile.js';

router.get('/:columnName', GetAverageFunc);

export { router };
