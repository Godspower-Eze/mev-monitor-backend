"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
class BlockNative {
    constructor() {
        this.apiKey = constants_1.BLOCKNATIVE_API_KEY;
        this.secretKey = constants_1.BLOCKNATIVE_SECRET_KEY;
        this.baseUrl = "https://api.blocknative.com";
    }
    client() {
        const client = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: {
                credentials: `${this.apiKey}:${this.secretKey}`
            },
        });
        return client;
    }
    simulate(_client, _transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    system: "ethereum",
                    network: "main",
                    transactions: _transactions,
                };
                const response = yield _client.post("/simulate", data);
                console.log(response);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.default = BlockNative;
