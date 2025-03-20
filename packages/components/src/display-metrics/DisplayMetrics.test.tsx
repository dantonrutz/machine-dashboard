import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import DisplayMetrics from "./DisplayMetrics";
import { MachineDataType } from "@repo/types";

describe("DisplayMetrics", () => {
  it("Deve renderizar o valor das métricas com o símbolo de %", () => {
    const mockedMetrics: MachineDataType["metrics"] = {
      efficiency: 20,
      rpm: 95, // dado mockado
      temperature: 72, // dado mockado
      uptime: 59, // dado mockado
    };

    render(<DisplayMetrics machineMetrics={mockedMetrics} />);

    // Verifica se as métricas são renderizadas com o símbolo de '%' corretamente
    expect(screen.getByText("20%")).toBeInTheDocument();
    expect(screen.getByText("95%")).toBeInTheDocument();
    expect(screen.getByText("72%")).toBeInTheDocument();
    expect(screen.getByText("59%")).toBeInTheDocument();
  });

  it("Deve renderizar o valor das métricas como 0% se uma métrica for negativa", () => {
    const mockedMetrics: MachineDataType["metrics"] = {
      efficiency: -12,
      rpm: 95, // dado mockado
      temperature: 72, // dado mockado
      uptime: 59, // dado mockado
    };

    render(<DisplayMetrics machineMetrics={mockedMetrics} />);

    // Verifica se uma métrica negativa é renderizada como 0% e as outras métricas são mostradas corretamente
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("95%")).toBeInTheDocument();
    expect(screen.getByText("72%")).toBeInTheDocument();
    expect(screen.getByText("59%")).toBeInTheDocument();
  });
});
