"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MULTIPLIER = exports.REDIS_PORT = exports.REDIS_PASSWORD = exports.REDIS_HOST = exports.MONGODB_URL = exports.BLOCKNATIVE_SECRET_KEY = exports.BLOCKNATIVE_API_KEY = exports.RPC_PASSWORD = exports.RPC_USERNAME = exports.RPCS = exports.CALLER = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.CALLER = process.env.CALLER;
exports.RPCS = {
    INFURA_WS: process.env.INFURA_RPC,
    ANKR_RPC: process.env.ANKR_RPC,
    PERSONAL_RPC: process.env.PERSONAL_RPC,
};
exports.RPC_USERNAME = process.env.USERNAME;
exports.RPC_PASSWORD = process.env.PASSWORD;
exports.BLOCKNATIVE_API_KEY = process.env.BLOCKNATIVE_API_KEY;
exports.BLOCKNATIVE_SECRET_KEY = process.env.BLOCKNATIVE_SECRET_KEY;
exports.MONGODB_URL = process.env.MONGODB_URL;
exports.REDIS_HOST = process.env.REDIS_HOST;
exports.REDIS_PASSWORD = process.env.REDIS_PASSWORD;
exports.REDIS_PORT = parseInt(process.env.REDIS_PORT);
exports.MULTIPLIER = 1000000000000000;
