// Página principal do dashboard que exibe métricas da máquina
// Gerencia o estado de carregamento e verifica a conexão com a internet
// Se a conexão for perdida, exibe a OfflinePage
// Durante o carregamento, exibe o DashboardSkeleton
// Após o carregamento, exibe as métricas da máquina no MachineMetrics

"use client";

import { useState, useEffect } from "react";
import { getMockedMachineData } from "../../actions";
import { MachineDataType } from "@repo/types";
import DashboardSkeleton from "./DashboardSkeleton";
import MachineMetrics from "./MachineMetrics";
import Container from "@repo/components/layout/Container";
import useNetworkStatus from "../../hooks/useNetworkStatus";
import OfflinePage from "../OfflinePage";

export default function DashboardPage() {
  const [machineData, setMachineData] = useState<MachineDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isOnline } = useNetworkStatus();

  // Se estivéssemos usando um WebSocket, a abordagem seria um pouco diferente
  // Em vez de `setInterval`, abriríamos uma conexão WebSocket no `useEffect`
  // O servidor enviaria os dados em tempo real, eliminando a necessidade de polling
  // `setMachineData` seria atualizado ao receber novas mensagens do WebSocket
  useEffect(() => {
    if (!isOnline) return;

    const fetchData = async () => {
      const machine = await getMockedMachineData();
      setMachineData(machine);
      setIsLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isOnline]);

  return (
    <Container tag="main" className="flex flex-col min-h-screen" smallPadding>
      {isLoading ? (
        <DashboardSkeleton />
      ) : isOnline ? (
        <MachineMetrics machineData={machineData!} />
      ) : (
        <OfflinePage />
      )}
    </Container>
  );
}
