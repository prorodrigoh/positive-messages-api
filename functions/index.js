import functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { addOneMessage, getMessages } from "./messages.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/all', getMessages)
app.post('/addnew', addOneMessage)

export const api = functions.https.onRequest(app)