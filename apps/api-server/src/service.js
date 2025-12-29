import express from 'express';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import DB from './database.js';
import uuid from 'uuid';

import { ObjectId } from 'mongodb';

// const jsonpatch = require('fast-json-patch');
const app = express();

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Set an authentication cookie that lasts for 7 days
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.use(express.json()); // JSON body parsing using built-in middleware
app.use(cookieParser()); // Use the cookie parser middleware for tracking authentication tokens
app.use(express.static('public')); // Serve up the front-end static content hosting

var apiRouter = express.Router();
app.use(`/api`, apiRouter); // Router for service endpoints

// Create a new user and give them an authentication cookie
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUserByUserName(req.body.userName)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.userName, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ userName: user.userName });
    }
});