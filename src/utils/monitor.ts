import { ethers } from "ethers";

import { RPCS, RPC_PASSWORD, RPC_USERNAME } from "../constants";
import BlockNative from "../services/blocknative";
import { ITransactionInfo } from "../types";

export const listener = () => {
  const provider = new ethers.providers.WebSocketProvider(RPCS.INFURA_WS!);
  provider.on("pending", async (tx) => {
    const connection: any = {};
    connection.url = RPCS.PERSONAL_RPC;
    connection.user = RPC_USERNAME;
    connection.password = RPC_PASSWORD;
    const provider = new ethers.providers.JsonRpcProvider(connection, 1);
    try {
        const transactionInfo = await provider.getTransaction(tx);
      if (transactionInfo) {
          console.log(transactionInfo)
          const blocknativeInstance = new BlockNative()
          const client = blocknativeInstance.client()
          const transactions: ITransactionInfo[] = [
            {
              to: transactionInfo.to!,
              from: "0x691B7091689b6BE6FBc1898DC44Bab8944344fa5",
              gas: transactionInfo.gasLimit.toNumber(),
              value: transactionInfo.value,
              input: transactionInfo.data
            },
          ];
          const response = await blocknativeInstance.simulate(client, transactions)
          console.log(response)
        }
    } catch (err) {
        console.log(err)
    }
  });
};
