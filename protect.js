import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(cookieParser());

router.use((req, res, next) => {
    const token = req.cookies?.KSToken;

    if (!token) return res.status(401).send({ message: 'Unauthorized' });

    try {
        req.user = jwt.verify(token, 'KeshavSoft');
        next();
    } catch (err) {
        console.error("Token validation failed:", err.message);
        res.status(401).send({ message: 'Unauthorized' });
    }
});

export { router };