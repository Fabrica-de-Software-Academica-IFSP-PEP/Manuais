---
title: Atas
description: Treinamento completo sobre Atas Pedagógicas, Atas Deliberativas e Histórico de Atas para a CSP
tags: [atas, pedagogica, deliberativa, votacao, historico]
---

# Gestão de Atas (Pedagógicas e Deliberativas)

Esta seção é dedicada à criação, condução, preenchimento e finalização das **Atas Pedagógicas** e **Atas Deliberativas**, além da consulta no **Histórico de Atas**.

---

## 1. Criar Nova Ata

Nas páginas **"Cursos Técnicos Integrados"** ou **"Cursos Técnicos CON/SUB"**, clique no botão **"Nova Ata"** no canto superior direito.

**Informações necessárias no modal de criação:**
1. **Tipo de Ata**: Selecione entre **Ata Pedagógica** ou **Ata Deliberativa**.
2. **Turma**: Pesquise e selecione a turma que será avaliada.
3. **Período (Bimestre ou Semestre)**:
   - **No Ensino Médio Integrado**:
     - **Ata Pedagógica**: Disponível para **1º Bimestre**, **2º Bimestre** e **3º Bimestre**.
     - **Ata Deliberativa**: Disponível exclusivamente para o **4º Bimestre**.
   - **Nos Cursos Técnicos CON/SUB**:
     - É dividido por semestre (**1º Semestre** ou **2º Semestre**), permitindo criar 1 Ata Pedagógica e 1 Ata Deliberativa por semestre.
4. **Descrição do documento**: Preenchida automaticamente conforme o tipo e o período selecionados (ex.: `Ata do Conselho de Classe - 1º Bimestre` ou `Ata do Conselho Deliberativo - 4º Bimestre`), podendo ser ajustada se necessário.
5. **Presidente**: Selecione o membro da CSP que presidirá a reunião.
6. **Data da reunião**: Selecione a data de realização no calendário.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-criar-ata.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

---

## 2. Ata Pedagógica (Conselho de Classe)

A Ata Pedagógica é organizada em **duas etapas** navegáveis pelos botões **Avançar** e **Voltar**:

### 1ª Etapa: Contexto da Turma

1. **Informações Iniciais**:
   - **Considerações do Coordenador do Curso**
   - **Representante(s) de turma presente(s)** e suas **Considerações** (exclusivo CSP)
   - **Representante(s) de pais/responsáveis presente(s)** e suas **Considerações** (exclusivo CSP)
   - Após preencher, clique no botão **"Salvar Informações Iniciais"**.
2. **Considerações por Área ou Componente Curricular**:
   - **No Ensino Integrado**: Os campos são divididos nas 4 grandes áreas (*Matemática e Ciências da Natureza*, *Ciências Humanas*, *Linguagens* e *Disciplinas Técnicas e Projeto Integrador*). Em cada área, a CSP pode preencher o **Resumo CSP**, revisar as **Considerações dos Professores**, selecionar/ajustar o docente **Relator** e clicar no botão **"Salvar"** daquela área.
   - **Nos Cursos CON/SUB**: Os campos são listados individualmente por componente curricular, cada um com seu botão **"Salvar"**.
3. **Seleção de Discentes em Conselho**:
   - **Triagem Automática**: O sistema inclui automaticamente os discentes que se enquadram nos critérios de conselho (no Integrado: média de área `< 6,0` ou média de disciplina `< 4,0`, exceto optativas; no CON/SUB: média global `< 6,0` ou componente `< 4,0`). Esses alunos aparecem identificados com a tag **`Automático`** e **não podem ser removidos**.
   - **Inclusão Manual**: Use o seletor múltiplo para adicionar outros estudantes que atendam aos critérios de aprovação, mas que precisem ser discutidos em conselho.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-preencher-ata.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

### 2ª Etapa: Discentes em Conselho

Ao clicar em **"Avançar"**, você acessa a listagem detalhada dos discentes em conselho:

- **Legenda de Cores do Grid de Rendimento**:
  - **Atenção (Amarelo/Laranja)**: Nota entre **4,0 e 5,9** e/ou Presença entre **75% e 79,9%**.
  - **Crítico (Vermelho)**: Nota **`< 4,0`** e/ou Presença **`< 75%`**.
- **Visualização de Pareceres por Componente (Ícone de Olho)**:
  - No canto superior direito de cada card de componente curricular, a CSP dispõe de um botão com ícone de **olho** (acompanhado de uma bolinha vermelha caso o parecer do docente ainda esteja pendente).
  - Ao clicar no ícone, abre-se um modal exibindo o **Histórico dos Bimestres Anteriores** e as **Considerações**, **Encaminhamentos** e **Recuperação Paralela** registrados no período atual.
- **Parecer Pedagógico (CSP)**:
  - Ao final do card de cada estudante, há o bloco destacado em roxo **"Parecer Pedagógico (CSP)"**.
  - Registre o parecer conclusivo da coordenação sociopedagógica sobre o discente e clique em **"Salvar Parecer Pedagógico"**.

### Exportação, Lista de Presença e Finalização da Ata Pedagógica

- **Ver PDF**: Gera o PDF oficial da ata pedagógica contendo o cabeçalho com identificação do bimestre/semestre, as considerações da turma, o bloco de médias por área de conhecimento, os apontamentos docentes, o histórico de períodos anteriores e o parecer pedagógico.
- **Lista de Presença**: Botão exclusivo da CSP no topo da ata que gera e baixa o documento Word (`.docx`) formatado com a tabela de assinaturas dos membros presentes.
- **Fechar/Reabrir Edição para Docentes**: Permite bloquear temporariamente o preenchimento pelos professores antes da finalização definitiva.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-travar-ata.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

- **Finalizar Ata**: Na 2ª etapa (Discentes em Conselho), clique no botão vermelho **"Finalizar Ata"** e confirme no pop-up. Após finalizada, a ata recebe o status de validada e fica permanentemente bloqueada para alterações.

<video className='w-full rounded-lg mt-8 shadow-lg bg-zinc-400' autoPlay loop muted>
  <source src="/Manuais/2024-2-ConselhoDeliberativo/assets/videos/csp-finalizar-ata.mp4" type="video/mp4" />
  Seu navegador não suporta a reprodução de vídeos.
</video>

---

## 3. Ata Deliberativa (Conselho Deliberativo e Votação em Tempo Real)

Ao abrir uma **Ata Deliberativa** (4º Bimestre no Integrado ou Semestral no CON/SUB), o sistema direciona para a interface especializada do Conselho Deliberativo:

### Triagem Regimental Automática
O sistema seleciona automaticamente os estudantes submetidos à deliberação que possuem **Frequência Global ≥ 75%** e rendimento insuficiente:
- **Ensino Integrado**: Pelo menos uma média de área `< 6,0` (excluindo optativas).
- **Cursos CON/SUB**: Média Global `< 6,0` ou pelo menos um componente curricular com média final `< 4,0`.

> Caso todos os estudantes da turma tenham atingido os critérios de aprovação, o sistema exibe automaticamente o termo oficial: *"NÃO HOUVE ALUNO DESTA TURMA INDICADO PARA ANÁLISE NESTE CONSELHO."*

### Preenchimento pela CSP em cada Discente
Para cada estudante submetido ao conselho, o card apresenta:
- **Tabela de Componentes**: Médias finais, faltas, frequência, situação de recuperação paralela e apontamentos dos docentes.
- **Conselhos Anteriores (Histórico do Ano)**: Compilado automaticamente a partir das atas pedagógicas anteriores da turma.
- **Registros ETEP e Registros NAPNE**: Campos de autoria exclusiva da CSP.
- **Parecer Pedagógico do Conselho**: Relato fundamentado da CSP norteando a análise do conselho.

### Condução da Sessão de Votação Nominal em Tempo Real
1. **Abrir Votação**: No topo da página, clique no botão verde **"Abrir Votação"**. O status mudará para **Sessão de Votação Aberta** com sincronização em tempo real (`Tempo Real Ativo`).
2. **Acompanhamento dos Votos**: Os docentes da turma verão os botões de voto em suas telas e registrarão seus votos nominalmente. **A equipe CSP não vota**, apenas acompanha em tempo real o placar consolidado (*Votantes*, *Aprovados*, *Retidos* e, no CON/SUB, *Parcial*) e o quadro de membros participantes.
3. **Encerrar Votação**: Quando todos os docentes tiverem votado, clique no botão vermelho **"Encerrar Votação"**.
4. **Deliberação Final e Dependências**:
   - Ao encerrar a votação, o sistema **pré-seleciona automaticamente a Deliberação Final** com base na maioria dos votos dos docentes (*Aprovado pelo Conselho / no Módulo*, *Aprovado Parcialmente com Dependência* ou *Retido*).
   - Nos cursos CON/SUB, caso o resultado seja **Aprovado Parcialmente**, o campo **Disciplinas em Dependência** é exibido com o botão **"Sugerir reprovações"** para preenchimento rápido das siglas reprovadas.
   - Revise os dados e clique em **"Salvar Parecer e Deliberação"** no card do aluno.

### Validação Oficial, Assinaturas Eletrônicas e Exportação
- Ao concluir a deliberação de todos os estudantes, clique no botão **"Finalizar Ata"** no topo da página.
- Todos os membros participantes passam a constar como **Assinado** no quadro de **Membros Participantes e Assinaturas Eletrônicas**, e o documento é bloqueado permanentemente.
- Utilize o botão **"Ver PDF"** no topo da ata deliberativa para visualizar e baixar o documento oficial em PDF.
- Caso seja necessário colher assinaturas físicas complementares dos membros presentes, clique em **"Lista de Presença"** (exclusivo da CSP) para baixar o arquivo Word (`.docx`). *(O botão de download da ata em DOCX não existe mais no sistema, sendo o PDF o formato oficial).*

<img
  src="/Manuais/2024-2-ConselhoDeliberativo/assets/images/ata-deliberativa.png"
  alt="Tela de Ata do Conselho Deliberativo"
  width={800}
  height={400}
  className='w-full aspect-video rounded-lg mt-4 shadow-lg bg-gray-400'
/>

---

## 4. Histórico de Atas

O menu **"Histórico de Atas"** oferece uma visão centralizada e hierárquica de todas as atas do sistema:

- **Navegação em 5 níveis**: `Ano Letivo` → `Modalidade de Ensino` (*Ensino Médio Integrado* ou *Curso Técnico Concomitante*) → `Curso` → `Turma` → `Atas`.
- **Filtros combinados**: Filtre por **Ano Letivo**, **Modalidade**, **Curso**, **Tipo de Conselho** (*Pedagógico* ou *Deliberativo*), **Bimestre** (`1º` ao `4º Bim`), busca textual ou marque **"Somente turmas com atas"**.
- **Ações rápidas**: Baixe o PDF diretamente pelo botão **"Baixar PDF"** na listagem ou clique em **"Abrir Ata"** para visualizar os detalhes.

<img
  src="/Manuais/2024-2-ConselhoDeliberativo/assets/images/historico-atas.png"
  alt="Tela de Histórico de Atas"
  width={800}
  height={400}
  className='w-full aspect-video rounded-lg mt-4 shadow-lg bg-gray-400'
/>