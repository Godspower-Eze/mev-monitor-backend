import mongoose from "mongoose";

import { ITransactions } from "../types";

const Schema = mongoose.Schema

const TransactionsSchema = new Schema({
  hash: {
    type: String,
    required: [true, "Hash is required"],
  },
  category: {
    type: String,
    enum: [
      "Generalized Frontrunners",
      "FrontRunners",
      "Backrunners",
      "Sandwich",
      "Liquadators",
      "Arbitrageurs",
    ],
    required: [true, "Category is required"],
  },
  platform: {
    type: String,
    required: [true, "Platform is required"],
  },
});

const Transactions = mongoose.model<ITransactions>(
  "Transactions",
  TransactionsSchema,
  "Transactions"
);
export default Transactions;
