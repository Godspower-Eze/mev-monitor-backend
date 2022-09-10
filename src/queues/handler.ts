import Bull from "bull";

import { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from "../constants";

const newHandler = (_topic: string) =>
  new Bull(_topic, {
    redis: {
      port: REDIS_PORT,
      host: REDIS_HOST,
      password: REDIS_PASSWORD,
    },
    settings: { lockDuration: 1800000, maxStalledCount: 0 },
  });

export default newHandler;
