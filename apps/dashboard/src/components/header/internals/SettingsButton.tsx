// Componente de botão para abrir um dropdown de configurações
// O botão está desabilitado por enquanto, indicando que a funcionalidade está temporariamente inativa

import { Settings } from "lucide-react";

export default function SettingsButton() {
  return (
    <button
      disabled={true}
      className="flex items-center justify-center p-1 rounded-lg transition-colors duration-200 hover:bg-gray-400/30 disabled:cursor-not-allowed"
    >
      <Settings size={20} strokeWidth={2} />
    </button>
  );
}
