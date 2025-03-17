import Image from "next/image";
import { Button } from "@repo/components/button";
import logo from "../../public/logo.svg";
import { MachineDataType } from "@repo/types";

export default function Page() {

  const machine: MachineDataType = {
    id: "MCH-001",
    timestamp: new Date().toISOString(),
    state: "RUNNING",
    metrics: {
      temperature: 75.2,
      rpm: 1450,
      uptime: 123456,
      efficiency: 92.5,
    },
    alerts: [
      {
        level: "WARNING",
        message: "High temperature detected",
        component: "Cooling System",
      },
      {
        level: "INFO",
        message: "Routine maintenance due in 24 hours",
        component: "General",
      },
    ],
  };
  
  return (
    <div className="bg-primaryBlue">
      <span>Hello world!</span>
      <span>{JSON.stringify(machine)}</span>
      <Image alt="logo da stw" src={logo} />
      <Button> teste</Button>
    </div>
  );
}
