import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

import { PORT, MONGODB_URL } from "./constants";
import { listener } from "./utils/monitor";


const app: Express = express();
app.use(express.json())

mongoose
  .connect(MONGODB_URL!)
  .then(() => console.info("> Database connection successful!"));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get("/txs", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Express + TypeScript Server run");
});

listener()