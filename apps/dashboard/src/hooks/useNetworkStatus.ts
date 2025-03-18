// Hook personalizado para monitorar o status da conexão de rede
// Retorna um objeto contendo `isOnline` (true, false ou undefined) e `isLoading` (boolean)
// `isLoading` será true enquanto o estado da conexão ainda não foi definido no cliente

import { useEffect, useState } from "react";

export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const updateNetwork = () => setIsOnline(navigator.onLine);

    setIsOnline(navigator.onLine);

    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  }, []);

  return { isOnline, isLoading: isOnline === undefined };
}
