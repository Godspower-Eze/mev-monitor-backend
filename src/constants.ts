import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT!

export const CALLER = process.env.CALLER!;

export const RPCS = {
  INFURA_WS: process.env.INFURA_RPC!,
  ANKR_RPC: process.env.ANKR_RPC,
  PERSONAL_RPC: process.env.PERSONAL_RPC!,
};

export const RPC_USERNAME = process.env.USERNAME!;

export const RPC_PASSWORD = process.env.PASSWORD!;

export const BLOCKNATIVE_API_KEY = process.env.BLOCKNATIVE_API_KEY!;

export const BLOCKNATIVE_SECRET_KEY = process.env.BLOCKNATIVE_SECRET_KEY;

export const MONGODB_URL = process.env.MONGODB_URL;

export const REDIS_HOST = process.env.REDIS_HOST!;

export const REDIS_PASSWORD = process.env.REDIS_PASSWORD!;

export const REDIS_PORT = parseInt(process.env.REDIS_PORT!);

export const MULTIPLIER = 1_000_000_000_000_000;
