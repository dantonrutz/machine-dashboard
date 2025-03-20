# Monorepo - Dashboard de monitoramento

Projeto desenvolvido para entrevista técnica.

Optei por manter os componentes mais genéricos na biblioteca compartilhada (`packages/components`), tornando-os reutilizáveis em diferentes partes do projeto. Já os componentes específicos, como o Header, Footer, ThemeButton, ... foram mantidos na pasta `components` dentro de `apps/dashboard/src`, pois são utilizados exclusivamente nessa aplicação.

Esta documentação é geral.

- Para uma documentação mais específica do dashboard, acesse [apps/dashboard/README.md](./apps/dashboard/README.md).
- Para uma documentação mais específica dos componentes, acesse [packages/components/README.md](./packages/components/README.md).

## Como usar o projeto?

Este projeto utiliza o `pnpm` como gerenciador de pacotes. Para instalar as dependências, execute:

```sh
pnpm install
```

Para iniciar o ambiente de desenvolvimento, use:

```sh
pnpm run dev
```

Para realizar o build da aplicação, use:

```sh
pnpm run build
```

Para iniciar a build do dashboard, execute:

```sh
pnpm run start
```

## Aplicações e pacotes

- `apps/dashboard`: uma aplicação [Next.js](https://nextjs.org/) com [Tailwind CSS](https://tailwindcss.com/)
- `packages/components`: uma biblioteca de componentes compartilhada com o `dashboard`, utiliza [Tailwind CSS](https://tailwindcss.com/) e [ShadCN UI](https://ui.shadcn.com/)
- `@repo/types`: configurações de tipos TypeScript `types`, que pode ser compartilhada entre diferentes aplicações
- `@repo/tailwind-config`: configurações do `tailwind`, compartilhadas entre o `dashboard` e os componentes
- `@repo/eslint-config`: configurações do `eslint` (inclui `eslint-config-next` e `eslint-config-prettier`)
- `@repo/typescript-config`: configurações do TypeScript `tsconfig.json` usadas em todo o monorepo

### Testes

A aplicação utiliza **Vitest** para realizar os testes.
Para rodar os testes, execute:

```sh
pnpm run test
```

### Formatação de código

Para verificar o linting, execute:

```sh
pnpm run lint
```

Para checar os tipos do TypeScript, execute:

```sh
pnpm run check-types
```

Para formatar o código, execute:

```sh
pnpm run format
```
