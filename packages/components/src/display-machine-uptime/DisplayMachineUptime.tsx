// Componente que exibe o tempo de atividade (uptime) da máquina em formato de horas
// Ele também mostra uma mensagem indicando se a máquina foi reiniciada recentemente ou se está operando normalmente

import Text from "../layout/Text";
import convertSecondsToHour from "../utils/convertSecondsToHour";

interface Props {
  machineUptime: number;
}

export default function DisplayMachineUptime({ machineUptime }: Props) {
  const wasRebootedRecently = machineUptime < 600;

  return (
    <div className="flex flex-col justify-center h-full gap-4">
      <Text tag="h5" className={`font-medium`}>
        {convertSecondsToHour(machineUptime)}
      </Text>
      <Text tag="span" className="text-sm opacity-70">
        {wasRebootedRecently
          ? "A máquina foi reiniciada há menos de 10 minutos"
          : "A máquina está operando normalmente"}
      </Text>
    </div>
  );
}
