import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import LineChart from "./LineChart";

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("LineChart", () => {
  it("Deve renderizar um gráfico de linha", () => {
    render(<LineChart metric="rpm" />);

    const lineChartElement = screen.getByRole("figure");

    // Verifica se o gráfico de linha é renderizado com o role 'figure'
    expect(lineChartElement).toBeInTheDocument();
  });
});
