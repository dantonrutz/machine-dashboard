// Componente que exibe os alertas de uma máquina com base no estado atual
// Os alertas são ordenados de acordo com a sua severidades (CRITICAL, WARNING e INFO)

import { CheckCircle } from "lucide-react";
import { MachineDataType } from "@repo/types";
import Text from "../layout/Text";
import { Alert, AlertDescription, AlertTitle } from "../shadcn-ui/alert";

interface Props {
  machineAlerts: MachineDataType["alerts"];
}

export default function DisplayAlerts({ machineAlerts }: Props) {
  // Ordena os alertas, colocando CRITICAL antes de WARNING, e WARNING antes de INFO
  const sortedAlerts = machineAlerts?.sort((a, b) => {
    const alertPriority: Record<"INFO" | "WARNING" | "CRITICAL", number> = {
      INFO: 3,
      WARNING: 2,
      CRITICAL: 1,
    };

    return alertPriority[a.level] - alertPriority[b.level];
  });

  return (
    <ul className="flex flex-col gap-2">
      {sortedAlerts && sortedAlerts.length > 0 ? (
        sortedAlerts.map((alert, i) => (
          <Alert key={i} severity={alert.level}>
            <AlertTitle>{alert.component}</AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        ))
      ) : (
        <div className="mx-auto mt-6 flex items-center gap-2 text-primaryGreen">
          <CheckCircle strokeWidth={2} />
          <Text tag="span">Parabéns, esta máquina não tem nenhum alerta!</Text>
        </div>
      )}
    </ul>
  );
}
