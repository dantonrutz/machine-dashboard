// Componente responsável por exibir as métricas da máquina.
// Apresenta informações como estado, temperatura, rotações por minuto, tempo de operação e eficiência.
// Inclui gráficos para análise de tendência e exibe alertas recentes da máquina.

import {
  BadgeAlert,
  Bolt,
  ChartLine,
  DollarSign,
  RefreshCcw,
  ThermometerSun,
  Timer,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/components/shadcn-ui/card";
import { MachineDataType } from "@repo/types";
import DisplayMachineStatus from "@repo/components/display-machine-status/DisplayMachineStatus";
import DisplayMachineUptime from "@repo/components/display-machine-uptime/DisplayMachineUptime";
import GaugeChart from "@repo/components/gauge-chart/GaugeChart";
import LineChart from "@repo/components/line-chart/LineChart";
import DisplayAlerts from "@repo/components/display-alerts/DisplayAlerts";
import DisplayMetrics from "@repo/components/display-metrics/DisplayMetrics";

interface Props {
  machineData: MachineDataType;
}

export default function MachineMetrics({ machineData }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 640:grid-cols-2 1280:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Estado</CardTitle>
            <Bolt size={16} strokeWidth={2.5} className="opacity-70" />
          </CardHeader>
          <CardContent>
            <DisplayMachineStatus machineStatus={machineData.state} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Temperatura</CardTitle>
            <ThermometerSun
              size={16}
              strokeWidth={2.5}
              className="opacity-70"
            />
          </CardHeader>
          <CardContent>
            <GaugeChart
              label="Temperatura"
              unit="°C"
              value={machineData.metrics.temperature}
              maxValue={85}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rotações por minuto</CardTitle>
            <RefreshCcw size={16} strokeWidth={2.5} className="opacity-70" />
          </CardHeader>
          <CardContent>
            <GaugeChart
              label="Rotação"
              unit="rpm"
              value={machineData.metrics.rpm}
              maxValue={1500}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tempo de operação</CardTitle>
            <Timer size={16} strokeWidth={2.5} className="opacity-70" />
          </CardHeader>
          <CardContent>
            <DisplayMachineUptime machineUptime={machineData.metrics.uptime} />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 1024:grid-cols-3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Linha de temperatura</CardTitle>
            <div className="flex flex-row gap-2">
              <ThermometerSun
                size={16}
                strokeWidth={2.5}
                className="opacity-70"
              />
              <ChartLine size={16} strokeWidth={2.5} className="opacity-70" />
            </div>
          </CardHeader>
          <CardContent>
            <LineChart metric="temperature" />
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Linha de rotaçoes por minuto</CardTitle>
            <div className="flex flex-row gap-2">
              <RefreshCcw size={16} strokeWidth={2.5} className="opacity-70" />
              <ChartLine size={16} strokeWidth={2.5} className="opacity-70" />
            </div>
          </CardHeader>
          <CardContent>
            <LineChart metric="rpm" />
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Indicador de eficiência</CardTitle>
            <div className="flex flex-row gap-2">
              <DollarSign size={16} strokeWidth={2.5} className="opacity-70" />
              <ChartLine size={16} strokeWidth={2.5} className="opacity-70" />
            </div>
          </CardHeader>
          <CardContent className="">
            <GaugeChart
              label="Eficiência"
              unit="%"
              value={machineData.metrics.efficiency}
              maxValue={100}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 1024:grid-cols-2">
        <Card className="w-full order-last 1024:order-first">
          <CardHeader>
            <CardTitle>Alertas recentes</CardTitle>
            <BadgeAlert size={16} strokeWidth={2.5} className="opacity-70" />
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <CardDescription>
              Confira abaixo os alertas mais recentes. Eles fornecem informações
              importantes sobre o status atual da máquina, ajudando a manter
              você atualizado sobre eventos ou mudanças relevantes.
            </CardDescription>
            <DisplayAlerts machineAlerts={machineData.alerts} />
          </CardContent>
        </Card>
        <Card className="w-full h-max">
          <CardHeader>
            <CardTitle>Métricas de eficiência </CardTitle>
            <DollarSign size={16} strokeWidth={2.5} className="opacity-70" />
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <CardDescription>
              Confira abaixo as métricas atuais da máquina. Essas métricas
              ajudam a monitorar o desempenho e o estado da máquina em tempo
              real.
            </CardDescription>
            <DisplayMetrics machineMetrics={machineData.metrics} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
