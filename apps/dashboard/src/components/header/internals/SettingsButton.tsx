// Componente de botão para abrir um dropdown de configurações
// O botão está desabilitado por enquanto, indicando que a funcionalidade está temporariamente inativa

import { Settings } from "lucide-react";

export default function SettingsButton() {
  return (
    <button
      disabled
      className="flex items-center justify-center p-1 rounded-lg cursor-not-allowed transition-colors duration-200 hover:bg-gray-400/30"
    >
      <Settings size={20} strokeWidth={2} />
    </button>
  );
}
