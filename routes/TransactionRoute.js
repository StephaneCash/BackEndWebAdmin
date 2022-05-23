import express from "express";
import { getAllTransation, getTransationById, createTransaction, deleteTransaction } from "../controllers/TransactionController.js";

const router = express.Router();

router.get('/api/transactions', getAllTransation);
router.get('/api/transactions/:id', getTransationById);
router.post('/api/transactions', createTransaction);
router.delete('/api/transactions/:id', deleteTransaction);

export default router;