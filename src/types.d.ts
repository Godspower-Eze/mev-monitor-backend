import { BigNumber } from "ethers";

// Utils
export interface ITransactionInfo {
  to: string;
  from: string;
  value: number | BigNumber;
  input: string;
  gas: number | BigNumber;
  gasPrice?: number;
  maxFeePerGas?: number;
  maxPriorityFeePerGas?: number;
}

// Models
export interface ITransactions {
  hash: string;
  category: string;
  platform: string
}