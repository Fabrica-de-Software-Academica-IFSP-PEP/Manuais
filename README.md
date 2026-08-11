# Manuais de Sistema — Fábrica de Software IFSP/PEP

Este repositório consolida a coleção de manuais de sistemas desenvolvidos pela Fábrica de Software do IFSP - Campus Presidente Epitácio. O projeto é construído utilizando [Docusaurus](https://docusaurus.io/), um gerador moderno de sites estáticos que converte arquivos Markdown (`.md`) em um site interativo e padronizado.

---

## Como adicionar um novo manual

O Docusaurus deste projeto está configurado para gerar a barra lateral e as rotas de navegação de forma **totalmente automática**. Siga o passo a passo abaixo para adicionar um novo manual ao site:

### 1. Crie a pasta do projeto
Navegue até a pasta `docs/` na raiz do repositório e crie uma nova pasta com o nome do projeto e o semestre de desenvolvimento.
- **Exemplo:** `docs/2026-1-NovoProjeto`

### 2. Defina o nome do manual na barra lateral
Para que o menu lateral exiba um nome legível (em vez do nome da pasta), crie um arquivo chamado `_category_.json` dentro da pasta que você acabou de criar (`docs/2026-1-NovoProjeto/_category_.json`) com o seguinte conteúdo:

```json
{
  "label": "Nome do Novo Projeto"
}
```

### 3. Adicione os arquivos Markdown
Crie os arquivos `.md` (Markdown) dentro da pasta do projeto. 
- O arquivo principal deve se chamar `index.md`. Ele será a página inicial do manual.
- Você pode criar subpastas e outros arquivos `.md` conforme a necessidade de organização do seu manual. O Docusaurus lerá toda a estrutura automaticamente.

**Importante:** Todo arquivo `.md` deve iniciar com um "Frontmatter" (cabeçalho) para definir o título da página. Exemplo:

```markdown
---
title: Introdução ao Sistema
---

# Introdução ao Sistema
Escreva o conteúdo do manual aqui...
```

### 4. Adicione imagens
Recomendamos criar uma pasta `img/` ou semelhante dentro da pasta do seu projeto (ex: `docs/2026-1-NovoProjeto/img/`). Para referenciar a imagem no seu arquivo Markdown, utilize caminhos relativos:

```markdown
![Texto Alternativo da Imagem](img/minha-imagem.png)
```

> **Aviso sobre tags HTML**: Como o Docusaurus utiliza MDX (Markdown + React), evite usar tags HTML como `<img>` soltas, com atributos de `style="width: 100%"` ou sem a barra de fechamento (`/>`). Prefira sempre a sintaxe padrão do Markdown `![]()`.

---

## Como Contribuir (Fork e Pull Request)

Como este repositório não tem acesso aberto de edição para todos, o fluxo de trabalho para adicionar ou alterar manuais deve ser feito através de um **Fork**.

1. **Faça um Fork**: No canto superior direito da página do repositório no GitHub, clique no botão **Fork** para criar uma cópia do repositório na sua conta.
2. **Trabalhe no seu Fork**: Adicione seus manuais e faça testes locais no repositório que você acabou de clonar.
3. **Abra um Pull Request (PR)**: Quando tudo estiver pronto, acesse a página do repositório original e abra um **Pull Request** propondo as suas alterações.

> **Importante:** Para evitar sobrecarga na revisão, envie o seu Pull Request **apenas ao final do semestre**, quando o manual estiver completamente finalizado e testado.

---

## Desenvolvimento Local

Para testar as alterações localmente na sua máquina e visualizar o site, você precisará ter o [Node.js](https://nodejs.org/) instalado.

**Instale as dependências (apenas na primeira vez):**
```bash
npm install
```

**Inicie o servidor de desenvolvimento:**
```bash
npm run start
```
*Isso abrirá uma janela no seu navegador (normalmente em `http://localhost:3000`). Qualquer alteração salva nos arquivos `.md` será atualizada em tempo real na tela.*

---

## Formato Antigo (Legado)
Os arquivos originais em formato HTML/CSS puro (antes da migração para o Docusaurus) encontram-se preservados na pasta `old_format/`. Eles não são compilados pelo Docusaurus e servem apenas para fins de histórico e consulta.
