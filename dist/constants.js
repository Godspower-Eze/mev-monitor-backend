"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URL = exports.BLOCKNATIVE_SECRET_KEY = exports.BLOCKNATIVE_API_KEY = exports.RPC_PASSWORD = exports.RPC_USERNAME = exports.RPCS = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.RPCS = {
    INFURA_WS: process.env.INFURA_RPC,
    PERSONAL_RPC: process.env.PERSONAL_RPC,
};
exports.RPC_USERNAME = process.env.USERNAME;
exports.RPC_PASSWORD = process.env.PASSWORD;
exports.BLOCKNATIVE_API_KEY = process.env.BLOCKNATIVE_API_KEY;
exports.BLOCKNATIVE_SECRET_KEY = process.env.BLOCKNATIVE_SECRET_KEY;
exports.MONGODB_URL = process.env.MONGODB_URL;
