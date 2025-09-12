import express from 'express';
const router = express.Router();

import { GetSumFunc } from '../Controllers/entryFile.js';

router.get('/:columnName', GetSumFunc);  // e.g., /Min/Profit

export { router };
