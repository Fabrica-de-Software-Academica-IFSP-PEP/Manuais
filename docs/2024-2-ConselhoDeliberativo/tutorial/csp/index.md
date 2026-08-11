---
title: Configuração e dados
description: Treinamento completo para membros da Coordenadoria Sociopedagógica
tags: [dados, importacao, cadastro]
---

# Tutorial para CSP

- **Importação** de mapas de docentes e turmas
- **Cadastro manual** de usuários
- **Gestão** de coordenadores de curso
- **Criação e finalização** de atas
- **Administração completa** do sistema

## Informações sobre os dados

Todos os dados a serem importados no sistema são obtidos no [Suap](https://suap.ifsp.edu.br/). A CSP deve garantir que os dados estejam atualizados e corretos antes de cada importação.
Estes documentos são essenciais para o funcionamento do sistema e sua correta importação é de extrema importância.

Além disso, os documentos devem seguir os formatos e estruturas especificadas para evitar erros durante o processo de importação.

### Mapa de Docentes
- 📊 **Planilha** com mapa de docentes (.xls)

**Informações obrigatórias (*exemplo*):**

| Sigla do Componente | Descrição do Componente | Professores | Turma | Código do Curso     | Descrição do Curso |
|---------------------|-------------------------|-------------|-------|---------------------|--------------------|
| INT.09905 (PEPLPR1)              | LÍNGUA PORTUGUESA 1    | João Silva (1231231)  | 20241.1.PEP.INT.INF.2015.1I | PEP.INT.INF.2014-V3 | TÉCNICO EM INFORMÁTICA INTEGRADO AO ENSINO MÉDIO |


### Mapa de Turmas
- 📊 **Planilha** com mapa de turmas (.xls)

**Informações obrigatórias (*exemplo, células vazias à direita são mescladas*):**

|                   | **INT.09905 (PEPLPR1)** |   |   | **INT.09906 (PEPART1)** |   |   | **INT.09907 (PEPEFI1)** |   |   |
| ----------------- | ----------------------- | - | - | ----------------------- | - | - | ----------------------- | - | - |
| **Carga Horária** | **79H de 120H**         |   |   | **52H de 80H**          |   |   | **50H de 80H**          |   |   |
| **Aluno**         | **N**                   | **F**                   | **Sit.**                | **N** | **F** | **Sit.** | **N** | **F** | **Sit.** |
| aluno 1           | 5                       | \-                      | CUR                     | 6 | 5 | CUR | 7,5 | 2 | CUR |
| aluno 2           | 6                       | \-                      | CUR                     | 7,5 | 2 | CUR | 8,5 | 2 | CUR |


## Cadastro de usuários

No sistema, existem dois métodos principais para cadastrar usuários: importação em massa e cadastro manual. A seguir, detalhamos ambos os processos.
Ambas se encontram no menu "Usuários"

*Lembrando que a importação em massa só funciona para docentes. Membros da CSP devem ser cadastrados manualmente.*

### Importando mapa de docentes

A importação do mapa de docentes funciona ao arrastar e soltar a planilha ou selecioná-la manualmente no sistema. O sistema processa o arquivo e cria os usuários automaticamente.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-importar-docentes.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

### Cadastro manual de usuários

Para o cadastro manual do usuário, você deve se atentar aos seguintes detalhes:

- Tipo de usuário selecionado: Docentes ou CSP
- Clicar em "Novo Usuário"
- Preencher os campos obrigatórios
- Gerar senha temporária

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-cadastrar-usuario.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

## Importar Mapa de Turmas

A importação do mapa de turmas é um processo crucial para garantir que todas as turmas e seus respectivos docentes estejam corretamente registrados no sistema. Siga os passos abaixo para realizar a importação com sucesso.

Deve ser feito no menu **"Cursos Técnicos Integrados"** ou **"Cursos Técnicos Concomitantes e Subsequentes"**, dependendo da modalidade das turmas.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-importar-turma.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

## Definir Coordenador de Curso

Após a importação de dados de turmas e docentes, é essencial definir os coordenadores de curso para garantir que cada turma tenha um responsável designado. Siga os passos abaixo para atribuir coordenadores às turmas corretamente.

Deve ser feito no menu **"Cursos"**.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-definir-coordenador.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

---

*Este treinamento capacita completamente a CSP para administração autônoma do sistema.*