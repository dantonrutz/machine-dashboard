// Componente de alternância de tema que permite ao usuário mudar entre os modos claro e escuro
// Utiliza o `next-themes` para gerenciar o tema com suporte ao modo do sistema
// Garante que a renderização ocorra apenas após a montagem para evitar problemas de Cumulative Layout Shift

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Skeleton } from "@repo/components/shadcn-ui/skeleton";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {!mounted ? (
        <Skeleton className="w-7 h-7" />
      ) : (
        <button
          onClick={toggleTheme}
          disabled={!mounted}
          aria-label="Switch theme"
          className="flex items-center justify-center p-1 rounded-lg transition-colors duration-200 hover:bg-gray-400/30"
        >
          {resolvedTheme === "dark" ? (
            <Sun size={20} strokeWidth={2} />
          ) : (
            <Moon size={20} strokeWidth={2} />
          )}
        </button>
      )}
    </>
  );
}
