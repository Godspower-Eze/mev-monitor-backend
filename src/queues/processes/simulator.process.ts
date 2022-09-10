import { Job } from "bull";
import BlockNative from "../../services/blocknative";

import newHandler from "../handler";

const simulationHandlerProcess = async (job: Job) => {
    const data = job.data;
    const blocknativeInstance = new BlockNative()
    const client = blocknativeInstance.client()
    const transactions = data.transactions
    try {
        const response = await blocknativeInstance.simulate(client, transactions);
        console.log(response)
    } catch (err) {
        console.error(err);
        console.log("----------------- SIMULATOR ERROR END --------------------");
    }
};

const newSimulatorProcess = (_topic: string) => {
  const simulatorHandler = newHandler(_topic);

  simulatorHandler.process(simulationHandlerProcess);

  const handleSimulation = async (message: any) => {
    simulatorHandler.add(message);
  };

  simulatorHandler.on("error", (err) => {
    console.error("error client", err);
  });
  return { handleSimulation };
};

export default newSimulatorProcess;
