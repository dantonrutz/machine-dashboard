// Componente de Gráfico de Linha que exibe a evolução dos indicadores (Temperatura e Rotação) ao longo do tempo.
// O histórico de temperatura e rpm foram mockados

import {
  CartesianGrid,
  Line,
  XAxis,
  LineChart as RechartsLineChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../shadcn-ui/chart";

interface Props {
  metric: "rpm" | "temperature";
}

export default function LineChart({ metric }: Props) {
  const mockedMachineData = [
    {
      timestamp: "12h",
      rpm: 880,
      temperature: 45,
    },
    {
      timestamp: "13h",
      rpm: 1020,
      temperature: 58,
    },
    {
      timestamp: "14h",
      rpm: 1220,
      temperature: 64,
    },
    {
      timestamp: "15h",
      rpm: 1450,
      temperature: 83,
    },
    {
      timestamp: "16h",
      rpm: 1140,
      temperature: 50,
    },
    {
      timestamp: "17h",
      rpm: 1230,
      temperature: 57,
    },
    {
      timestamp: "18h",
      rpm: 1350,
      temperature: 72,
    },
    {
      timestamp: "19h",
      rpm: 1280,
      temperature: 68,
    },
    {
      timestamp: "20h",
      rpm: 1390,
      temperature: 80,
    },
    {
      timestamp: "21h",
      rpm: 1400,
      temperature: 84,
    },
    {
      timestamp: "22h",
      rpm: 1150,
      temperature: 60,
    },
  ];

  return (
    <ChartContainer config={{}} className="w-full max-h-[180px]">
      <RechartsLineChart
        accessibilityLayer
        data={mockedMachineData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="timestamp"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          key={metric}
          dataKey={metric}
          type="natural"
          stroke="#1485c8"
          strokeWidth={2}
          dot={false}
        />
      </RechartsLineChart>
    </ChartContainer>
  );
}
