// Componente de Gauge (medidor radial) que exibe o valor atual em relação ao valor máximo para diferentes indicadores (Temperatura, Rotação ou Eficiência)
// A cor da barra é ajustada com base no valor percentual e no tipo de indicador

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { ChartContainer } from "../shadcn-ui/chart";

interface Props {
  maxValue: number;
  value: number;
  label: "Temperatura" | "Rotação" | "Eficiência";
  unit: string;
}

export default function GaugeChart({ maxValue, value, label, unit }: Props) {
  const formattedValue = value.toFixed(0);
  const percentage = (value / maxValue) * 100;

  const isEfficiencyIndicator = label === "Eficiência";

  // Gera a cor de acordo com a porcentagem e o tipo de indicador (Temperatura, Rotação ou Eficiência)
  const getFillColor = (percentage: number) => {
    if (isEfficiencyIndicator) {
      if (percentage > 90) {
        return "#009900";
      } else if (percentage >= 70) {
        return "#eab308";
      } else {
        return "#DC2626";
      }
    }

    if (percentage >= 90) {
      return "#DC2626";
    } else if (percentage >= 70) {
      return "#eab308";
    } else {
      return "#009900";
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4 h-full">
      <ChartContainer
        config={{}}
        className={`absolute w-full aspect-square max-w-[180px] ${isEfficiencyIndicator && "mt-5"} `}
        role="figure"
      >
        <RadialBarChart
          data={[{ maxValue: maxValue - value, value: value }]}
          endAngle={180}
          innerRadius={80}
          outerRadius={130}
        >
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      className="flex flex-row"
                      fill={getFillColor(percentage)}
                    >
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 10}
                        className="text-2xl font-bold"
                      >
                        {formattedValue.toLocaleString()}{" "}
                        <tspan className="text-sm font-normal">{unit}</tspan>
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="maxValue"
            stackId="a"
            cornerRadius={5}
            fill="#9A9A9A"
          />
          <RadialBar
            dataKey="value"
            stackId="a"
            cornerRadius={5}
            fill={getFillColor(percentage)}
          />
        </RadialBarChart>
      </ChartContainer>
      <span
        className={` text-sm opacity-70 ${isEfficiencyIndicator ? "mt-[124px]" : "mt-[104px]"}`}
      >
        {label} máxima - {maxValue}
        {unit}
      </span>
    </div>
  );
}
