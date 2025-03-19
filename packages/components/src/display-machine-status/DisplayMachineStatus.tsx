// Componente que exibe o status de uma máquina com base no estado atual (RUNNING, STOPPED, MAINTENANCE, ERROR)
// Ele mostra um ícone, um rótulo com a descrição do estado da máquina e um texto explicativo

import { CheckCircle, Cog, PauseCircle, XCircle } from "lucide-react";
import { MachineDataType } from "@repo/types";
import Text from "../layout/Text";

interface Props {
  machineStatus: MachineDataType["state"];
}

export default function DisplayMachineStatus({ machineStatus }: Props) {
  const machineStatusOptions = {
    RUNNING: {
      label: "Em funcionamento",
      color: "text-primaryGreen",
      description: "A máquina está operando normalmente, sem interrupções",
      icon: CheckCircle,
    },
    STOPPED: {
      label: "Parada",
      color: "",
      description: "A máquina foi desligada ou pausada manualmente",
      icon: PauseCircle,
    },
    MAINTENANCE: {
      label: "Em manutenção",
      color: "text-yellow-500",
      description: "A máquina está em manutenção preventiva ou corretiva",
      icon: Cog,
    },
    ERROR: {
      label: "Falha",
      color: "text-primaryRed",
      description: "A máquina apresentou um erro e requer atenção",
      icon: XCircle,
    },
  };

  const status =
    machineStatusOptions[machineStatus] || machineStatusOptions.ERROR;

  return (
    <div className="flex flex-col justify-center h-full gap-4">
      <div className={`flex items-center gap-2 ${status.color}`}>
        <status.icon size={24} strokeWidth={2.5} />
        <Text tag="h5" className={`${status.color} font-medium`}>
          {status.label}
        </Text>
      </div>
      <Text tag="span" className="text-sm opacity-70">
        {status.description}
      </Text>
    </div>
  );
}
