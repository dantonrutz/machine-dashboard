// Componente de cabeçalho com logo, título e controles de conexão e tema
// Exibe o logo da STW Tecnologia, o título "Dashboard de Monitoramento" e o status de conexão
// Inclui botões para alternar o tema e abrir as configurações
// O cabeçalho fica fixo no topo da página e é responsivo, com um design que se adapta ao modo claro e escuro

import Link from "next/link";
import Image from "next/image";
import companyLogo from "../../../public/logo.svg";
import ConnectionStatus from "./internals/ConnectionStatus";
import ThemeSwitch from "./internals/ThemeSwitch";
import SettingsButton from "./internals/SettingsButton";
import Container from "@repo/components/layout/Container";
import Text from "@repo/components/layout/Text";

export default function Header() {
  return (
    <Container
      tag="header"
      className="sticky top-0 z-10 flex flex-row items-center justify-between py-4 border-b-2 border-primaryBlue bg-primaryWhite/10 dark:bg-primaryBlack/10 backdrop-blur-md"
    >
      <div className="flex flex-row gap-12 items-center">
        <Link href="/">
          <Image
            src={companyLogo}
            alt="Logo da STW Tecnologia"
            className="w-20"
          />
        </Link>
        <Text tag="h6" className="hidden 768:flex">
          Dashboard de Monitoramento
        </Text>
      </div>
      <div className="flex flex-row gap-4 640:gap-12">
        <ConnectionStatus />
        <div className="flex flex-row gap-2 640:gap-4">
          <ThemeSwitch />
          <SettingsButton />
        </div>
      </div>
    </Container>
  );
}
