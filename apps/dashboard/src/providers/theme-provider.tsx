// Provider que verifica e aplica o tema do sistema ou o tema definido pelo usuário.
// Utiliza o `next-themes` para permitir a alternância entre temas claro e escuro.
// O atributo "class" define a classe no elemento raiz do HTML para estilização baseada no tema.
// O `defaultTheme` é "system", ou seja, usa o tema do sistema por padrão.
// `enableSystem` permite que o tema seja ajustado automaticamente conforme a configuração do sistema operacional.

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
