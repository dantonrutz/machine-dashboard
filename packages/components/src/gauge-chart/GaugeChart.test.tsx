import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import GaugeChart from "./GaugeChart";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("GaugeChart", () => {
  it("Deve renderizar um gráfico de gauge", () => {
    render(
      <GaugeChart maxValue={100} value={75} label="Temperatura" unit="°C" />,
    );

    const gaugeChartElement = screen.getByRole("figure");

    // Verifica se o gráfico de gauge é renderizado com o role 'figure'
    expect(gaugeChartElement).toBeInTheDocument();
  });

  it("Deve exibir um texto com o indíce máximo de acordo com a label e unit fornecido", () => {
    render(<GaugeChart maxValue={100} value={75} label="Rotação" unit="RPM" />);

    // Verifica se o texto que exibe o valor máximo do gráfico está correto, de acordo com a label e unidade fornecida
    expect(screen.getByText(/Rotação máxima - 100RPM/i)).toBeInTheDocument();
  });
});
