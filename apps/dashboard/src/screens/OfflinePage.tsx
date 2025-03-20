// Tela exibida quando a conexão com a internet é perdida

import Text from "@repo/components/layout/Text";

export default function OfflinePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full flex-grow h-full mb-20">
      <Text tag="h2" className="font-medium">
        Parece que você está offline
      </Text>
      <Text tag="h6" className="text-center">
        Por favor, verifique sua conexão com a internet e tente novamente.
      </Text>
    </section>
  );
}
