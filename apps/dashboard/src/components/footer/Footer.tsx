// Componente de rodapé que exibe o logo da STW Tecnologia e título "Dashboard de Monitoramento"

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
