// Componente que exibe as métricas de uma máquina
// Algumas métricas foram mockadas, como disponiblidade, performance e qualidade

import { MachineDataType } from "@repo/types";
import Text from "../layout/Text";

interface Props {
  machineMetrics: MachineDataType["metrics"];
}

export default function DisplayMetrics({ machineMetrics }: Props) {
  const machineMetricsOptions = [
    {
      label: "OEE",
      value: parseInt(machineMetrics.efficiency.toFixed(0), 10),
    },
    {
      label: "Disponibilidade",
      value: 95, //dado mockado
    },
    {
      label: "Performance",
      value: 72, //dado mockado
    },
    {
      label: "Qualidade",
      value: 59, //dado mockado
    },
  ];

  return (
    <ul className="flex flex-col gap-2">
      {machineMetricsOptions.map((metric, i) => (
        <li key={i} className="flex flex-row gap-2">
          <Text tag="span" className="font-medium">
            {metric.label}:
          </Text>
          <Text
            tag="span"
            className={
              metric.value > 90
                ? "text-green-600"
                : metric.value >= 70
                  ? "text-yellow-500"
                  : "text-red-600"
            }
          >
            {metric.value > 0 ? metric.value : 0}%
          </Text>
        </li>
      ))}
    </ul>
  );
}
