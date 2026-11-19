---
title: CSP - Coordenadoria Sociopedagógica
description: Perfil administrativo com permissão total das funcionalidades do sistema
tags: [csp, administrador, permissões]
---

# CSP - Coordenadoria Sociopedagógica

Este é o perfil com a **permissão administrativa total** das funcionalidades do sistema. Os membros da CSP são responsáveis pela configuração de dados do semestre/ano letivo, criação e condução das atas pedagógicas e deliberativas, registro dos pareceres sociopedagógicos e validação final dos documentos.

## Responsabilidades Principais

### Gestão de Usuários e Cursos
- **Importar mapa de docentes** extraído do SUAP (`.xls`/`.xlsx`)
- **Cadastrar e editar usuários** manualmente (Docentes e membros da CSP), podendo vincular componentes curriculares aos docentes
- **Definir coordenadores de curso** e consultar os docentes relacionados a cada curso

### Gestão de Turmas
- **Importar mapa de turmas** tanto de **Cursos Técnicos Integrados** quanto de **Cursos Técnicos CON/SUB** (de forma automática por curso ou via **Importação Manual** selecionando curso e turma)
- **Visualizar o Resumo da Turma** (Consolidado Geral ou por Bimestre) com destaques de cor por rendimento e frequência
- **Exportar Resumo da Turma em XLS** e remover turmas quando necessário

### Gestão de Atas Pedagógicas
- **Criar atas pedagógicas** (1º, 2º ou 3º Bimestre no Integrado; 1º ou 2º Semestre no Concomitante/Subsequente)
- **Registrar informações iniciais**: presença e considerações de representantes de turma e representantes de pais/responsáveis
- **Registrar o Resumo CSP e Relator** em cada área de conhecimento (no Ensino Integrado)
- **Gerenciar discentes em conselho**: revisar os discentes incluídos automaticamente pela regra regimental e adicionar manualmente outros estudantes que precisem ser discutidos
- **Acompanhar pareceres docentes**: visualizar rapidamente (ícone de olho com indicador de pendência) as considerações, encaminhamentos, recuperação paralela e histórico de bimestres anteriores de cada disciplina
- **Registrar o Parecer Pedagógico (CSP)**: parecer conclusivo da coordenação pedagógica para cada discente em conselho
- **Gerar Lista de Presença (`.docx`)** e **PDF oficial** da ata
- **Fechar/Reabrir edição para docentes** e **Finalizar Ata**

### Gestão de Atas Deliberativas
- **Criar atas deliberativas** (4º Bimestre no Integrado; 1º ou 2º Semestre no Concomitante/Subsequente)
- **Preencher registros exclusivos**: **Registros ETEP**, **Registros NAPNE** e **Parecer Pedagógico do Conselho** para cada estudante indicado automaticamente pela triagem regimental
- **Conduzir a Sessão de Votação**: abrir e encerrar a sessão de votação nominal em tempo real para os docentes da turma *(a equipe CSP conduz e monitora a sessão, mas não vota)*
- **Definir a Deliberação Final**: confirmar ou ajustar o resultado final (*Aprovado pelo Conselho / no Módulo*, *Aprovado Parcialmente com Dependência* ou *Retido*) e indicar as disciplinas em dependência quando aplicável
- **Validar e Oficializar a Ata**: encerrar permanentemente a ata deliberativa com registro de assinaturas eletrônicas e emitir o **PDF oficial** (o download da ata em DOCX foi descontinuado; a emissão em `.docx` é mantida para a **Lista de Presença**)

## Funcionalidades Exclusivas da CSP

- **Importação de planilhas** de docentes e turmas e exportação de resumos em Excel (`.xls`)
- **Criação, bloqueio de edição e validação/finalização** de atas pedagógicas e deliberativas
- **Emissão da Lista de Presença (`.docx`)** nas atas pedagógicas e deliberativas
- **Gestão completa** de usuários e definição de coordenadores de curso
- **Preenchimento de Parecer Pedagógico (CSP), ETEP, NAPNE e Deliberação Final**
- **Abertura e encerramento da sessão de votação** nos Conselhos Deliberativos

## Fluxo de Trabalho Típico

1. **Início do Período Letivo:**
   - Importar mapa de docentes no menu **Usuários**
   - Importar mapas de turmas nos menus **Cursos Técnicos Integrados** e **Cursos Técnicos CON/SUB**
   - Definir os coordenadores de curso no menu **Cursos**

2. **Conselhos Pedagógicos (1º ao 3º Bimestre no Integrado / Semestres no CON/SUB):**
   - Criar a **Ata Pedagógica** informando turma, bimestre/semestre, presidente e data
   - Verificar os discentes automáticos e selecionar discentes adicionais se necessário
   - Acompanhar o preenchimento pelos docentes
   - Preencher dados de representantes, Resumo CSP por área e o **Parecer Pedagógico (CSP)** de cada discente
   - Emitir a **Lista de Presença** e, ao término da reunião, clicar em **Finalizar Ata**

3. **Conselhos Deliberativos (4º Bimestre no Integrado / Semestres no CON/SUB):**
   - Criar a **Ata Deliberativa**
   - Registrar informações de ETEP, NAPNE e Parecer Pedagógico de cada aluno submetido ao conselho
   - Clicar em **Abrir Votação** para que os docentes votem em tempo real e, após todos votarem, clicar em **Encerrar Votação**
   - Revisar a **Deliberação Final** (pré-preenchida pela maioria dos votos), salvar e clicar em **Validar e Fechar Ata**

4. **Consulta e Arquivo:**
   - Utilizar o menu **Histórico de Atas** para filtrar atas por ano letivo, modalidade, curso, tipo de conselho ou bimestre e baixar os PDFs oficiais

---

*Para instruções passo a passo, consulte o [Tutorial para CSP](../../tutorial/csp/).*