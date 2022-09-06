import { BigNumber } from "ethers";

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