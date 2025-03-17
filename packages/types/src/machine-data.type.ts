export type MachineDataType = {
  id: string;
  timestamp: string;
  state: "RUNNING" | "STOPPED" | "MAINTENANCE" | "ERROR";
  metrics: {
    temperature: number;
    rpm: number;
    uptime: number;
    efficiency: number;
  };
  alerts?: {
    level: "INFO" | "WARNING" | "CRITICAL";
    message: string;
    component: string;
  }[];
};
