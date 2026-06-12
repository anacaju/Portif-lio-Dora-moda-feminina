# Modelo de Presença Digital Reutilizável

Base comercial em Next.js para criar sites de apresentação e catálogo para pequenos negócios. O visitante conhece a empresa, explora produtos ou serviços e inicia o atendimento pelo WhatsApp.

O projeto não possui carrinho, checkout, login, banco de dados ou pagamento online.

## Casos de uso

- Loja de roupas, acessórios ou presentes
- Salão, barbearia ou clínica
- Restaurante, confeitaria ou lanchonete
- Oficina, assistência técnica ou prestador de serviços
- Pequenos comércios em geral

## Como funciona a personalização

A arquitetura fica igual entre clientes. Para criar uma nova entrega, altere principalmente:

| Necessidade | Arquivo |
| --- | --- |
| Dados, textos, contato e SEO | `src/config/site.config.ts` |
| Cores, fontes e aparência | `src/config/theme.config.ts` |
| Ordem, visibilidade e variações das seções | `src/config/layout.config.ts` |
| Produtos, serviços ou itens do cardápio | `src/data/catalog.ts` |
| Categorias do catálogo | `src/data/categories.ts` |
| Diferenciais da empresa | `src/data/services.ts` |
| Perguntas frequentes | `src/data/faqs.ts` |
| Imagens do catálogo | `public/images/catalog/` |

## Estrutura principal

```text
src/
  app/
  components/
    catalog/
    layout/
    sections/
    ui/
  config/
    site.config.ts
    theme.config.ts
    layout.config.ts
    segment-presets.ts
  data/
    catalog.ts
    categories.ts
    services.ts
    faqs.ts
  lib/
  types/
public/
  images/
    catalog/
```

## Criando um site para um novo cliente

1. Duplique o projeto para uma nova pasta ou repositório.
2. Preencha os dados e textos em `src/config/site.config.ts`.
3. Escolha um preset visual em `src/config/theme.config.ts`.
4. Configure a composição da página em `src/config/layout.config.ts`.
5. Cadastre produtos ou serviços em `src/data/catalog.ts`.
6. Troque logo, hero e imagens do catálogo.
7. Revise WhatsApp, localização, redes sociais e SEO.
8. Rode lint e build antes da publicação.

## Presets de segmento

O arquivo `src/config/segment-presets.ts` documenta configurações recomendadas para:

- `varejo`: catálogo visual e preços opcionais
- `servicos`: destaque de serviços e confiança
- `alimentacao`: cardápio com categorias e pedido pelo WhatsApp

Use esses presets como referência ao ajustar `site.config.ts`, `theme.config.ts` e `layout.config.ts`.

## Controle de layout

Em `src/config/layout.config.ts` é possível:

- Alterar a ordem das seções
- Ativar ou desativar seções
- Escolher hero `split`, `centered` ou `showcase`
- Escolher catálogo `grid` ou `compact`
- Definir quantidade de colunas dos diferenciais
- Exibir ou ocultar preços
- Exibir ou ocultar o botão flutuante de WhatsApp

## Catálogo e WhatsApp

Cada item de `src/data/catalog.ts` aceita:

```ts
{
  id: "produto-01",
  name: "Produto em destaque",
  category: "novidades",
  description: "Descrição curta.",
  price: "R$ 89,90",
  image: "/images/catalog/product-01.svg",
  badge: "Novidade",
  featured: true,
  whatsappMessage: "Olá, gostaria de saber mais sobre este produto."
}
```

Se `whatsappMessage` não for preenchida, o projeto gera automaticamente uma mensagem com o nome do item.

## Temas disponíveis

Altere `activeTheme` em `src/config/theme.config.ts`:

- `varejoVibrante`
- `servicosConfiavel`
- `gastronomiaAcolhedora`
- `minimalista`

Também é possível editar cores, fonte, arredondamento e espaçamento de qualquer tema.

## Instalação e execução

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para validar a entrega:

```bash
npm run lint
npm run build
```

Pare o servidor de desenvolvimento antes de executar `npm run build`. Rodar build e dev simultaneamente usando a mesma pasta `.next` pode causar chunks inconsistentes.

## Publicação, domínio e entrega ao cliente

1. Publique o projeto na Vercel.
2. Compre o domínio pelo Registro.br, preferencialmente `.com.br`.
3. Mantenha o domínio no CPF ou CNPJ do cliente.
4. Configure o DNS para apontar para a Vercel.
5. Adicione o domínio nas configurações do projeto na Vercel.
6. Teste HTTPS, responsividade, links e WhatsApp.

Não automatize a compra do domínio.

## Checklist de entrega

- Conferir nome, textos, logo e imagens
- Conferir catálogo, categorias e preços
- Conferir mensagens individuais do WhatsApp
- Conferir telefone, e-mail e redes sociais
- Conferir endereço, mapa e horário
- Conferir seções ativas e ordem da página
- Conferir celular, tablet e desktop
- Conferir SEO, domínio, HTTPS e todos os links
