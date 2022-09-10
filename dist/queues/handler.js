"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const constants_1 = require("../constants");
const newHandler = (_topic) => new bull_1.default(_topic, {
    redis: {
        port: constants_1.REDIS_PORT,
        host: constants_1.REDIS_HOST,
        password: constants_1.REDIS_PASSWORD,
    },
    settings: { lockDuration: 1800000, maxStalledCount: 0 },
});
exports.default = newHandler;
