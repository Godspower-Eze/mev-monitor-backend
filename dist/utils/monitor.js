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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("../constants");
const queues_1 = require("../queues");
const listener = () => {
    const provider = new ethers_1.ethers.providers.WebSocketProvider(constants_1.RPCS.INFURA_WS);
    provider.on("pending", (tx) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // const connection: any = {};
        // connection.url = RPCS.PERSONAL_RPC;
        // connection.user = RPC_USERNAME;
        // connection.password = RPC_PASSWORD;
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(constants_1.RPCS.ANKR_RPC);
        try {
            const transactionInfo = yield provider.getTransaction(tx);
            if (transactionInfo) {
                const transactions = [
                    {
                        to: transactionInfo.to,
                        from: constants_1.CALLER,
                        gas: transactionInfo.gasLimit.toNumber(),
                        value: 100000000000000000,
                        input: transactionInfo.data,
                        gasPrice: (_a = transactionInfo.gasPrice) === null || _a === void 0 ? void 0 : _a.toNumber()
                    },
                ];
                const queueId = ethers_1.BigNumber.from(Math.floor(Math.random() * constants_1.MULTIPLIER)).toHexString();
                const { handleSimulation } = (0, queues_1.newSimulatorProcess)(queueId);
                yield handleSimulation({ transactions });
            }
        }
        catch (err) {
            console.error(err);
            console.log("----------------- MONITOR ERROR END --------------------");
        }
    }));
};
exports.listener = listener;
