# Dora Moda Feminina

Site institucional e catálogo online da Dora, desenvolvido em Next.js para apresentar a loja, organizar peças por referência e direcionar o atendimento para o WhatsApp.

## O que o site inclui

- Página de apresentação da marca
- Carrossel principal com capas responsivas
- Catálogo com filtros por categoria, tecido, tamanho e faixa de preço
- Consulta de peças pelo WhatsApp
- Seção sobre a fundadora e história da loja
- Localização com Google Maps e Waze
- Links para Instagram e atendimento personalizado
- Layout responsivo para mobile, tablet e desktop

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Validação

```bash
npm run lint
npm run build
```

## Principais arquivos de configuração

| Função | Arquivo |
| --- | --- |
| Dados da loja, contatos e textos | `src/config/site.config.ts` |
| Paleta de cores e identidade visual | `src/config/theme.config.ts` |
| Ordem e visibilidade das seções | `src/config/layout.config.ts` |
| Itens do catálogo | `src/data/catalog.ts` |
| Categorias | `src/data/categories.ts` |
| Perguntas frequentes | `src/data/faqs.ts` |

## Observação

Este projeto não possui carrinho, checkout, login ou pagamento online. O fluxo comercial é feito por atendimento direto via WhatsApp.
