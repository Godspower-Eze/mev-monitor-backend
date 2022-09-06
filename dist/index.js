"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./constants");
const monitor_1 = require("./utils/monitor");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default
    .connect(constants_1.MONGODB_URL)
    .then(() => console.info("> Database connection successful!"));
app.listen(constants_1.PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${constants_1.PORT}`);
});
app.get("/txs", (req, res) => {
    console.log(req.body);
    res.send("Express + TypeScript Server run");
});
(0, monitor_1.listener)();
