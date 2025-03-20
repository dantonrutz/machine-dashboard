# Frontend - Dashboard de monitoramento

O frontend do Dashboard de Monitoramento foi desenvolvido utilizando [Next.js](https://nextjs.org/), proporcionando uma experiência otimizada e eficiente. A arquitetura do projeto está organizada em diferentes diretórios para facilitar a manutenção e escalabilidade.

## Estrutura de pastas

- `src/app`: contém as páginas e a estrutura principal do Next.js com o conceito de roteamento baseado em pastas.
- `src/actions`: armazena funções assíncronas para manipulação de dados e comunicação com o backend (neste caso foi utilizado somente para mockar os dados).
- `src/components`: contém todos os componentes secundários, como `Footer`, `Header`, entre outros...
- `src/hooks`: diretório destinado aos hooks customizados. Atualmente, inclui apenas um hook para verificar a conexão com a internet.
- `src/providers`: armazena os providers do projeto. No momento, contém apenas o provider responsável por gerenciar o tema.
- `src/screens`: diretório onde estão as telas desenvolvidas do dashboard, loading e perda de conexão.
