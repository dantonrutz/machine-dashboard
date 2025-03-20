// Server action que simula um websocket, gerando dados de máquina simulados como temperatura, RPM, tempo de operação e alertas

"use server";

import { MachineDataType } from "@repo/types";

let previousTemperature = 50;
let previousRpm = 1300;
let previousUptime = 540;

export async function getMockedMachineData(): Promise<MachineDataType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const states: ("RUNNING" | "STOPPED" | "MAINTENANCE" | "ERROR")[] = [
        "RUNNING",
        "STOPPED",
        "MAINTENANCE",
        "ERROR",
      ];

      const state = states[Math.floor(Math.random() * states.length)] as
        | "RUNNING"
        | "STOPPED"
        | "MAINTENANCE"
        | "ERROR";
      const id = `machine-${Math.floor(Math.random() * 10000)}`;
      const timestamp = new Date().toISOString();

      const temperatureChange = Math.random() * 6 - 3;
      previousTemperature = Math.max(
        0,
        Math.min(100, previousTemperature + temperatureChange),
      );

      const rpmChange = Math.random() * 100 - 50;
      previousRpm = Math.max(1000, Math.min(6000, previousRpm + rpmChange));

      const metrics = {
        temperature: parseFloat(previousTemperature.toFixed(2)),
        rpm: Math.floor(previousRpm),
        uptime: previousUptime, // Usar o valor do uptime
        efficiency: parseFloat((Math.random() * 100).toFixed(2)),
      };

      previousUptime += 10;

      let alerts:
        | {
            level: "INFO" | "WARNING" | "CRITICAL";
            message: string;
            component: string;
          }[]
        | undefined = [];

      if (state === "ERROR") {
        alerts = [
          {
            level: "WARNING",
            message: "Erro de comunicação com o sistema de monitoramento.",
            component: "Sistema de monitoramento",
          },
          {
            level: "CRITICAL",
            message: "Máquina em erro, precisa de manutenção imediata.",
            component: "Sistema de controle",
          },
        ];
      } else if (state === "STOPPED") {
        alerts = [
          {
            level: "WARNING",
            message: "Máquina parada, aguardando reinício.",
            component: "Sistema de acionamento",
          },
          {
            level: "INFO",
            message: "A máquina está parada e aguardando reinício.",
            component: "Sistema de controle",
          },
        ];
      } else if (state === "MAINTENANCE") {
        alerts = [
          {
            level: "INFO",
            message: "A máquina está em manutenção, operação suspensa.",
            component: "Sistema de controle",
          },
          {
            level: "WARNING",
            message: "Recomenda-se verificar os componentes mecânicos.",
            component: "Sistema mecânico",
          },
        ];
      }

      resolve({
        id,
        timestamp,
        state,
        metrics,
        alerts,
      });
    }, 1000);
  });
}
