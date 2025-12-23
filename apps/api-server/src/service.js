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

app.use(express.json()); // JSON body parsing using built-in middleware\
app.use(cookieParser()); // Use the cookie parser middleware for tracking authentication tokens
app.use(express.static('public')); // Serve up the front-end static content hosting

var apiRouter = express.Router();
app.use(`/api`, apiRouter); // Router for service endpoints