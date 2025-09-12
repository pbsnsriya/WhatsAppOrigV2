import express from 'express';
const router = express.Router();

import { GetMinFunc } from '../Controllers/entryFile.js';

router.get('/:columnName', GetMinFunc);  // e.g., /Min/Profit

export { router };
