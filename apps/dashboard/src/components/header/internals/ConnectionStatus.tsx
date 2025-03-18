// Componente de status de conexão que exibe o estado atual da rede do usuário
// Usa o custom hook `useNetworkStatus` para verificar se o usuário está online ou offline
// Exibe um ícone de carregamento enquanto a verificação está em andamento

"use client";

import React from "react";
import { LoaderCircle, CheckCircle, XCircle } from "lucide-react";
import Text from "@repo/components/layout/Text";
import useNetworkStatus from "../../../hooks/useNetworkStatus";

export default function ConnectionStatus() {
  const { isOnline, isLoading } = useNetworkStatus();

  return (
    <div className="flex items-center gap-2 w-40">
      <Text tag="span">Conexão:</Text>
      {isLoading ? (
        <LoaderCircle
          size={20}
          strokeWidth={2}
          className="flex-shrink-0 animate-spin"
        />
      ) : isOnline ? (
        <div className="flex items-center gap-1 text-primaryGreen">
          <CheckCircle size={20} strokeWidth={2} />
          <Text tag="span">Online</Text>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-primaryRed">
          <XCircle size={20} strokeWidth={2} />
          <Text tag="span">Offline</Text>
        </div>
      )}
    </div>
  );
}
