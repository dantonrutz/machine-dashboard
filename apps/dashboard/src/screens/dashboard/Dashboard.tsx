"use client";

import { useState, useEffect } from "react";
import { getMockedMachineData } from "../../actions";
import { MachineDataType } from "@repo/types";
import DashboardSkeleton from "./DashboardSkeleton";
import MachineMetrics from "./MachineMetrics";
import Container from "@repo/components/layout/Container";

export default function Dashboard() {
  const [machineData, setMachineData] = useState<MachineDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <Container
      tag="main"
      className="flex flex-col py-10 gap-10 px-8 min-h-screen"
      removeDefaultPadding
    >
      {isLoading ? (
        <DashboardSkeleton />
      ) : (
        <MachineMetrics machineData={machineData!} />
      )}
    </Container>
  );
}
