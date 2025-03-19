// Componente de cabeçalho com logo, título e controles de conexão e tema
// Exibe o logo da STW Tecnologia, o título "Dashboard de Monitoramento" e o status de conexão
// Inclui botões para alternar o tema e abrir as configurações
// O cabeçalho fica fixo no topo da página e é responsivo, com um design que se adapta ao modo claro e escuro

import Link from "next/link";
import Image from "next/image";
import companyLogo from "../../../public/logo.svg";
import Container from "@repo/components/layout/Container";
import Text from "@repo/components/layout/Text";

export default function Footer() {
  return (
    <Container
      tag="header"
      className="flex flex-row items-center justify-between py-4 border-t-2 border-primaryBlue bg-primaryWhite/10 dark:bg-primaryBlack/10 backdrop-blur-md"
    >
      <Text tag="span">Dashboard de Automação Industrial</Text>
      <Link href="/">
        <Image
          src={companyLogo}
          alt="Logo da STW Tecnologia"
          className="w-12"
        />
      </Link>
    </Container>
  );
}
