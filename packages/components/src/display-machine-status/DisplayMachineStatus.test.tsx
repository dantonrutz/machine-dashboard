import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import DisplayMachineStatus from "./DisplayMachineStatus";

describe("DisplayMachineStatus", () => {
  it('Deve renderizar o status "Em funcionamento"', () => {
    render(<DisplayMachineStatus machineStatus="RUNNING" />);

    const statusLabel = screen.getByText("Em funcionamento");
    const description = screen.getByText(/operando normalmente/i);

    // Verifica se o status "Em funcionamento" e a descrição aparecem na tela
    expect(statusLabel).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Deve renderizar o status "Parada"', () => {
    render(<DisplayMachineStatus machineStatus="STOPPED" />);

    const statusLabel = screen.getByText("Parada");
    const description = screen.getByText(/desligada ou pausada/i);

    // Verifica se o status "Parada" e a descrição aparecem na tela
    expect(statusLabel).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Deve renderizar o status "Em manutenção"', () => {
    render(<DisplayMachineStatus machineStatus="MAINTENANCE" />);

    const statusLabel = screen.getByText("Em manutenção");
    const description = screen.getByText(/manutenção preventiva ou corretiva/i);

    // Verifica se o status "Em manutenção" e a descrição aparecem na tela
    expect(statusLabel).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Deve renderizar o status "Falha"', () => {
    render(<DisplayMachineStatus machineStatus="ERROR" />);

    const statusLabel = screen.getByText("Falha");
    const description = screen.getByText(/erro/i);

    // Verifica se o status "Falha" e a descrição aparecem na tela
    expect(statusLabel).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('Deve renderizar o status "Falha" para um status inválido', () => {
    // Forçando 'teste' a ser aceito como status inválido
    render(<DisplayMachineStatus machineStatus={"teste" as never} />);

    const statusLabel = screen.getByText("Falha");
    const description = screen.getByText(/erro/i);

    // Verifica se o status "Falha" é exibido e a descrição de erro é mostrada
    expect(statusLabel).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
