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
exports.listener = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("../constants");
const blocknative_1 = __importDefault(require("../services/blocknative"));
const listener = () => {
    const provider = new ethers_1.ethers.providers.WebSocketProvider(constants_1.RPCS.INFURA_WS);
    provider.on("pending", (tx) => __awaiter(void 0, void 0, void 0, function* () {
        const connection = {};
        connection.url = constants_1.RPCS.PERSONAL_RPC;
        connection.user = constants_1.RPC_USERNAME;
        connection.password = constants_1.RPC_PASSWORD;
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(connection, 1);
        try {
            const transactionInfo = yield provider.getTransaction(tx);
            if (transactionInfo) {
                console.log(transactionInfo);
                const blocknativeInstance = new blocknative_1.default();
                const client = blocknativeInstance.client();
                const transactions = [
                    {
                        to: transactionInfo.to,
                        from: "0x691B7091689b6BE6FBc1898DC44Bab8944344fa5",
                        gas: transactionInfo.gasLimit.toNumber(),
                        value: transactionInfo.value,
                        input: transactionInfo.data
                    },
                ];
                const response = yield blocknativeInstance.simulate(client, transactions);
                console.log(response);
            }
        }
        catch (err) {
            console.log(err);
        }
    }));
};
exports.listener = listener;
