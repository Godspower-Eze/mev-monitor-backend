import { ethers, BigNumber } from "ethers";

import { CALLER, MULTIPLIER, RPCS, RPC_PASSWORD, RPC_USERNAME } from "../constants";
import { newSimulatorProcess } from "../queues";
import BlockNative from "../services/blocknative";
import { ITransactionInfo } from "../types";

export const listener = () => {
  const provider = new ethers.providers.WebSocketProvider(RPCS.INFURA_WS!);
  provider.on("pending", async (tx) => {
    // const connection: any = {};
    // connection.url = RPCS.PERSONAL_RPC;
    // connection.user = RPC_USERNAME;
    // connection.password = RPC_PASSWORD;
    const provider = new ethers.providers.JsonRpcProvider(RPCS.ANKR_RPC);
    try {
      const transactionInfo = await provider.getTransaction(tx);
      if (transactionInfo) {
          const transactions: ITransactionInfo[] = [
            {
              to: transactionInfo.to!,
              from: CALLER,
              gas: transactionInfo.gasLimit.toNumber(),
              value: 1_000_000_000_000_000_00,
              input: transactionInfo.data,
              gasPrice: transactionInfo.gasPrice?.toNumber()
            },
          ];
          const queueId = BigNumber.from(
            Math.floor(Math.random() * MULTIPLIER)
          ).toHexString();
          const { handleSimulation } = newSimulatorProcess(queueId);
          await handleSimulation({ transactions });
        }
    } catch (err) {
      console.error(err)
      console.log("----------------- MONITOR ERROR END --------------------")
    }
  });
};
