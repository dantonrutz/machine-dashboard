import "./globals.css";
import "@repo/components/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard de monitoramento | STW Tecnologia",
  description:
    "Acompanhe métricas e dados em tempo real de suas máquinas com o dashboard de monitoramento da STW Tecnologia",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
