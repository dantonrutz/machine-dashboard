# Dashboard de monitoramento

Projeto desenvolvido para a entrevista técnica.

Optei por manter os componentes mais genéricos na biblioteca compartilhada, tornando-os reutilizáveis em diferentes partes do projeto. Já os componentes específicos, como o `Header` e o `ThemeButton`, foram mantidos na pasta `components` dentro de `apps/dashboard/src`, pois são utilizados exclusivamente nessa aplicação.

## Como usar o projeto?

Este projeto utiliza o `pnpm` como gerenciador de pacotes. Para instalar as dependências, execute:

```sh
pnpm install
```

Para iniciar o ambiente de desenvolvimento, use:

```sh
pnpm run dev
```

## Aplicações e pacotes

- `apps/dashboard`: uma aplicação [Next.js](https://nextjs.org/) com [Tailwind CSS](https://tailwindcss.com/)
- `packages/components`: uma biblioteca de componentes compartilhada com o `dashboard`, utiliza [Tailwind CSS](https://tailwindcss.com/)
- `@repo/types`: configurações de tipos TypeScript `types`, que pode ser compartilhada entre diferentes aplicações
- `@repo/tailwind-config`: configurações do `tailwind`, compartilhadas entre o `dashboard` e os componentes
- `@repo/eslint-config`: configurações do `eslint` (inclui `eslint-config-next` e `eslint-config-prettier`)
- `@repo/typescript-config`: configurações do TypeScript `tsconfig.json` usadas em todo o monorepo
