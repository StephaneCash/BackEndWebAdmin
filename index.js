import express from "express";
import cors from "cors"

import TransactionRoute from './routes/TransactionRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(TransactionRoute);

app.listen(5000, ()=>console.log('Le serveur back a bien démarré'));