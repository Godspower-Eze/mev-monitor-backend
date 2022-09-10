"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
const Transactions = mongoose_1.default.model("Transactions", TransactionsSchema, "Transactions");
exports.default = Transactions;
