---
title: Configuração e dados
description: Treinamento completo para membros da Coordenadoria Sociopedagógica
tags: [dados, importacao, cadastro]
---

# Tutorial para CSP — Configuração e Dados

- **Importação** de mapas de docentes e turmas (automática ou manual)
- **Cadastro manual e edição** de usuários e vínculo de componentes
- **Gestão** de coordenadores de curso e consulta de docentes relacionados
- **Visualização e exportação** do Resumo da Turma (por bimestre e consolidado)
- **Criação, condução e validação** de atas pedagógicas e deliberativas

## Informações sobre os dados

Todos os dados a serem importados no sistema são obtidos no [SUAP](https://suap.ifsp.edu.br/). A CSP deve garantir que os dados estejam atualizados e corretos antes de cada importação.
Estes documentos são essenciais para o funcionamento do sistema e sua correta importação é de extrema importância.

> **Importante:** Sempre importe primeiramente o **Mapa de Docentes** no menu **Usuários** antes de importar os **Mapas de Turmas**.

### Mapa de Docentes
- 📊 **Planilha** com mapa de docentes (`.xls` ou `.xlsx`)

**Informações obrigatórias (*exemplo*):**

| Sigla do Componente | Descrição do Componente | Professores | Turma | Código do Curso     | Descrição do Curso |
|---------------------|-------------------------|-------------|-------|---------------------|--------------------|
| INT.09905 (PEPLPR1)              | LÍNGUA PORTUGUESA 1    | João Silva (1231231)  | 20241.1.PEP.INT.INF.2015.1I | PEP.INT.INF.2014-V3 | TÉCNICO EM INFORMÁTICA INTEGRADO AO ENSINO MÉDIO |


### Mapa de Turmas
- 📊 **Planilha** com mapa de turmas (`.xls` ou `.xlsx`)

**Informações obrigatórias (*exemplo, células vazias à direita são mescladas*):**

|                   | **INT.09905 (PEPLPR1)** |   |   | **INT.09906 (PEPART1)** |   |   | **INT.09907 (PEPEFI1)** |   |   |
| ----------------- | ----------------------- | - | - | ----------------------- | - | - | ----------------------- | - | - |
| **Carga Horária** | **79H de 120H**         |   |   | **52H de 80H**          |   |   | **50H de 80H**          |   |   |
| **Aluno**         | **N**                   | **F**                   | **Sit.**                | **N** | **F** | **Sit.** | **N** | **F** | **Sit.** |
| aluno 1           | 5                       | \-                      | CUR                     | 6 | 5 | CUR | 7,5 | 2 | CUR |
| aluno 2           | 6                       | \-                      | CUR                     | 7,5 | 2 | CUR | 8,5 | 2 | CUR |


## Cadastro e Gestão de Usuários

No sistema, existem dois métodos principais para cadastrar usuários no menu **"Usuários"**: importação em massa via planilha e cadastro manual.

*Lembrando que a importação em massa cadastra automaticamente os **Docentes**, os **Cursos**, as **Turmas** e os **Componentes Curriculares**. Membros da CSP devem ser cadastrados manualmente na aba **CSP**.*

### Importando mapa de docentes

A importação do mapa de docentes funciona ao arrastar e soltar a planilha (`.xls`/`.xlsx`) ou selecioná-la manualmente no sistema. O sistema processa o arquivo, cria os docentes e vincula suas disciplinas automaticamente.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-importar-docentes.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

### Cadastro manual e edição de usuários

Para o cadastro manual ou edição de um usuário existente:

- Selecione a aba desejada no topo da página: **Docentes** ou **CSP**
- Clique em **"Novo usuário"** (ou selecione um usuário na tabela para editar/redefinir senha)
- Preencha **Nome**, **Matrícula (Prontuário)** e **E-mail**
- Na aba **Docentes**, você também pode selecionar ou ajustar manualmente os **Componentes Curriculares** vinculados ao professor através do seletor múltiplo com busca por nome ou sigla
- Defina a senha inicial (ou nova senha) e clique em **Salvar**

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-cadastrar-usuario.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

## Importar Mapa de Turmas e Consultar Resumo

A importação do mapa de turmas atualiza os discentes matriculados, suas notas por etapa/bimestre, médias por área de conhecimento, média global e frequência.

Deve ser realizada no menu **"Cursos Técnicos Integrados"** ou **"Cursos Técnicos CON/SUB"**, dependendo da modalidade da turma:

1. **Importação Padrão**: Selecione o curso correspondente na caixa de upload e arraste/selecione a planilha `.xls` ou `.xlsx`.
2. **Importação Manual (Switch "Importação Manual")**: Caso deseje atualizar uma turma específica diretamente, ative a chave **"Importação Manual"**, selecione o **Curso** e a **Turma** nos seletores exibidos acima da área de upload e envie a planilha.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-importar-turma.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

### Recursos na Listagem de Turmas
- **Filtro por Bimestre (Ensino Integrado)**: Na parte superior da lista de turmas integradas, filtre rapidamente as atas exibidas clicando em `Todos`, `1º Bimestre`, `2º Bimestre`, `3º Bimestre` ou `4º Bimestre`.
- **Resumo Turma e Exportação XLS**: Ao clicar em **Resumo Turma** ao lado do nome da turma, abre-se uma janela com:
  - **Legenda de cores**: Vermelho (*Média abaixo de 4*), Amarelo (*Média entre 4 e 6*), Cinza (*Nota vazia: -*) e Laranja (*Frequência abaixo de 80%*).
  - **Alternância de Visualização**: Botões para alternar entre o **Consolidado Geral** e cada etapa individual (**1º Bimestre**, **2º Bimestre**, etc.).
  - **Botão Exportar XLS** (exclusivo CSP): Permite baixar a planilha Excel com o resumo consolidado da turma.
- **Exclusão de Turma**: Membros da CSP possuem o ícone de lixeira ao lado de cada turma para removê-la mediante confirmação.

## Definir Coordenador de Curso e Ver Docentes Relacionados

No menu **"Cursos"**, a CSP define o docente responsável pela coordenação de cada curso:

1. Selecione o curso desejado na listagem
2. No campo **Coordenador**, pesquise e selecione o docente responsável
3. Ative, se desejar, a chave **"Mostrar docentes relacionados"** para visualizar todos os professores e prontuários vinculados àquele curso
4. Clique em **Salvar**

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-definir-coordenador.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

---

*Continue para a próxima seção para aprender a gerenciar as [Atas Pedagógicas e Deliberativas](./atas/).*