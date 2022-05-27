import functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { addMessage, getAllMessages } from "./src/messages.js";

const app = express();
app.use(cors());
app.use(express.json());

// setup my routes
app.get('/test', (req, res) => { res.send('here') });
app.get('/messages', getAllMessages)
app.post('/create', addMessage)

export const api = functions.https.onRequest(app)