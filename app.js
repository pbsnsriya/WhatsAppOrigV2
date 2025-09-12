import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromSV3 } from "./SV3/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/V3", routerFromV3);
app.use("/SV3", StartFuncFromMiddleware, routerFromSV3);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});