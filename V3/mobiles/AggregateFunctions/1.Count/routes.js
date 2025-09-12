import express from 'express';

const router = express.Router();

import { GetFunc } from './Controllers/entryFile.js'; // Import the controller function

// Define the route for the Count endpoint
router.get('/', GetFunc);

export { router };
