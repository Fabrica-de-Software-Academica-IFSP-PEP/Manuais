---
title: Visão Geral
sidebar_position: 1
---

# RED — Gerenciamento de Regime de Exercícios Domiciliares

Documentação dos níveis de acesso e funcionalidades do sistema. Este manual descreve o que cada perfil de usuário pode fazer dentro do RED.

| Informação | Detalhe |
|---|---|
| **Instituição** | IFSP Campus Presidente Epitácio |
| **Base legal** | Decreto-lei nº 1.044/1969 |
| **Versão** | 2026 — Manutenção |
| **Perfis** | CRA · CSP · Professor · Coordenador |

## Visão Geral do Sistema

O RED automatiza e organiza os processos de concessão, acompanhamento e registro do Regime de Exercícios Domiciliares para estudantes afastados por motivos de saúde.

O fluxo do processo RED envolve quatro perfis em sequência:

| Passo | Perfil | Ação |
|---|---|---|
| 1 | **CRA** | Abre o processo RED e notifica o coordenador |
| 2 | **Coordenador** | Confirma ou rejeita o processo. Avisa a CSP |
| 3 | **CSP** | Associa disciplinas ao processo RED do aluno |
| 4 | **Coordenador** | Associa cada professor à disciplina correspondente |
| 5 | **Professor** | Preenche o PEE e envia as atividades ao aluno |
| 6 | **Professor** | Avalia as tarefas e define o % de abono de faltas |
| 7 | **CRA** | Gera o relatório final de abono de faltas |

---

## Tecnologias do Sistema

Requisitos não funcionais e arquitetura técnica definidos na documentação oficial do RED.

| Tecnologia | Função |
|---|---|
| **Angular** | Frontend — Interface do usuário |
| **Node.js** | Backend — Servidor de aplicação |
| **Express** | Backend — Gerenciamento de rotas |
| **MySQL** | Banco de dados relacional |
| **Prisma ORM** | Mapeamento objeto-relacional |
| **Nodemailer** | Envio de e-mails automáticos |
| **SUAP** | Importação de dados externos |
| **Windows ou Linux** | Sistema operacional do servidor |

---

**Desenvolvimento:** Igor Antonio Serafim Siqueira e Igor Matheus Teixeira  
**Manutenção 2024:** Danilo Domingues Quirino, Murilo Lopes Fray de Oliveira e Natália Aparecida Barreiro Antunes Leonel  
**Manutenção 2026:** Maria Vitoria Marcelino Furrier  
**Orientador:** Prof. André Luís Olivete
