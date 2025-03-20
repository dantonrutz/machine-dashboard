import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import DisplayAlerts from "./DisplayAlerts";
import { MachineDataType } from "@repo/types";

describe("DisplayAlerts", () => {
  it("Deve renderizar uma mensagem dizendo que a máquina não tem nenhum alerta", () => {
    render(<DisplayAlerts machineAlerts={[]} />);

    const message = screen.getByText(/nenhum alerta/i);

    // Verifica se a mensagem "nenhum alerta" é exibida quando não há alertas
    expect(message).toBeInTheDocument();
  });

  it("Deve renderizar uma lista de alertas ordenados por severidade", () => {
    const mockedAlerts: MachineDataType["alerts"] = [
      {
        level: "INFO",
        component: "Compressor",
        message: "Compressor em bom estado",
      },
      {
        level: "WARNING",
        component: "Correia",
        message: "Correia está se desgastando",
      },
      {
        level: "CRITICAL",
        component: "Motor",
        message: "Falha iminente no motor",
      },
    ];

    render(<DisplayAlerts machineAlerts={mockedAlerts} />);

    const alerts = screen.getAllByRole("alert");

    // Verifica se a quantidade de alertas renderizados corresponde ao número de alertas enviados
    expect(alerts).toHaveLength(mockedAlerts.length);

    // Verifica se os alertas estão ordenados pela severidade, começando com o mais grave
    expect(alerts[0]).toHaveTextContent("Motor");
    expect(alerts[0]).toHaveTextContent("Falha iminente no motor");

    expect(alerts[1]).toHaveTextContent("Correia");
    expect(alerts[1]).toHaveTextContent("Correia está se desgastando");

    expect(alerts[2]).toHaveTextContent("Compressor");
    expect(alerts[2]).toHaveTextContent("Compressor em bom estado");
  });
});
