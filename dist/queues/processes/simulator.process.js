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
const blocknative_1 = __importDefault(require("../../services/blocknative"));
const handler_1 = __importDefault(require("../handler"));
const simulationHandlerProcess = (job) => __awaiter(void 0, void 0, void 0, function* () {
    const data = job.data;
    const blocknativeInstance = new blocknative_1.default();
    const client = blocknativeInstance.client();
    const transactions = data.transactions;
    try {
        const response = yield blocknativeInstance.simulate(client, transactions);
        console.log(response);
    }
    catch (err) {
        console.error(err);
        console.log("----------------- SIMULATOR ERROR END --------------------");
    }
});
const newSimulatorProcess = (_topic) => {
    const simulatorHandler = (0, handler_1.default)(_topic);
    simulatorHandler.process(simulationHandlerProcess);
    const handleSimulation = (message) => __awaiter(void 0, void 0, void 0, function* () {
        simulatorHandler.add(message);
    });
    simulatorHandler.on("error", (err) => {
        console.error("error client", err);
    });
    return { handleSimulation };
};
exports.default = newSimulatorProcess;
