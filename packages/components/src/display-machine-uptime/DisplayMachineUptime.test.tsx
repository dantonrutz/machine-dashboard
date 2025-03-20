import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import DisplayMachineUptime from "./DisplayMachineUptime";

describe("DisplayMachineUptime", () => {
  it("Deve renderizar uma mensagem dizendo que a máquina foi reiniciada a pouco tempo", () => {
    render(<DisplayMachineUptime machineUptime={0} />);

    const uptimeText = screen.getByText("0 segundos");
    const description = screen.getByText(/reiniciada há menos de 10 minutos/i);

    // Verifica se a mensagem de que a máquina foi reiniciada há pouco tempo e a descrição correta são exibidas
    expect(uptimeText).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("Deve renderizar uma mensagem dizendo que a máquina está operando normalmente", () => {
    render(<DisplayMachineUptime machineUptime={6000} />);

    const uptimeText = screen.getByText("1 hora e 40 minutos");
    const description = screen.getByText(/operando normalmente/i);

    // Verifica se a mensagem de tempo de operação e a descrição de operação normal são exibidas
    expect(uptimeText).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
