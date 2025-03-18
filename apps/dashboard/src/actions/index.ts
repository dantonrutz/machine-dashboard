"use server";

import { MachineDataType } from "@repo/types";

let previousTemperature = 45;
let previousRpm = 3000;

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

      // Controlar variação da temperatura e RPM
      const temperatureChange = Math.random() * 6 - 3; // Variação de -3 a +3 graus
      previousTemperature = Math.max(
        0,
        Math.min(100, previousTemperature + temperatureChange),
      ); // Temperatura entre 0 e 100°C

      const rpmChange = Math.random() * 100 - 50; // Variação do RPM entre -50 e +50
      previousRpm = Math.max(1000, Math.min(6000, previousRpm + rpmChange)); // RPM entre 1000 e 6000

      const metrics = {
        temperature: parseFloat(previousTemperature.toFixed(2)),
        rpm: Math.floor(previousRpm),
        uptime: Math.floor(Math.random() * 1000),
        efficiency: parseFloat((Math.random() * 100).toFixed(2)),
      };

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
