import express from 'express';
const router = express.Router();

import { GetMaxFunc } from '../Controllers/entryFile.js';

router.get('/:columnName', GetMaxFunc);  // e.g., /Min/Profit

export { router };
