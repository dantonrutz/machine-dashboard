import { MachineDataType } from "@repo/types";

interface Props {
  machineData: MachineDataType;
}

export default function MachineMetrics({ machineData }: Props){


  return (
    <div>
      <p>Última Atualização: {machineData.timestamp}</p>
      <p>Estado: {machineData.state}</p>
      <p>Temperatura: {machineData.metrics.temperature}°C</p>
      <p>RPM: {machineData.metrics.rpm}</p>
      <p>Eficiência: {machineData.metrics.efficiency}%</p>
    </div>
  );
};

