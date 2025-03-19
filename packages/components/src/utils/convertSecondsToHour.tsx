// Função que converte um valor de tempo em segundos para um formato legível em horas, minutos e segundos
// Caso o tempo seja negativo, retorna "0 segundos"
// Utiliza a biblioteca `date-fns` para calcular a duração e formatá-la de acordo com a localização brasileira (português)

import { formatDuration, intervalToDuration } from "date-fns";

const localePT = {
  formatDistance: (_token: string, count: number) => {
    const units: Record<string, string> = {
      xHours: `${count} hora${count > 1 ? "s" : ""}`,
      xMinutes: `${count} minuto${count > 1 ? "s" : ""}`,
      xSeconds: `${count} segundo${count > 1 ? "s" : ""}`,
    };
    return units[_token] || "";
  },
};

export default function convertSecondsToHour(seconds: number): string {
  if (seconds < 0) return "0 segundos";

  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  const formatOptions: ("hours" | "minutes" | "seconds")[] = duration.hours
    ? ["hours", "minutes"]
    : ["minutes", "seconds"];

  return (
    formatDuration(duration, {
      format: formatOptions,
      delimiter: " e ",
      locale: localePT,
    }) || "0 segundos"
  );
}
