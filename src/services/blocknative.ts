import axios, { AxiosInstance } from "axios";

import { BLOCKNATIVE_API_KEY, BLOCKNATIVE_SECRET_KEY } from "../constants";
import { ITransactionInfo } from "../types";

class BlockNative {

    apiKey = BLOCKNATIVE_API_KEY;
    secretKey = BLOCKNATIVE_SECRET_KEY
    baseUrl = "https://api.blocknative.com";

    constructor() {
        
    }

    client(): AxiosInstance {
        const client = axios.create({
          baseURL: this.baseUrl,
          headers: {
            credentials: `${this.apiKey}:${this.secretKey}`

          },
        });
        return client;
    }

    async simulate(_client: AxiosInstance, _transactions: ITransactionInfo[]) {
        try {
            const data: {
              system: string;
              network: string;
              transactions: ITransactionInfo[];
            } = {
              system: "ethereum",
              network: "main",
              transactions: _transactions,
            };
            const response = await _client.post("/simulate", data)
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }
}

export default BlockNative;