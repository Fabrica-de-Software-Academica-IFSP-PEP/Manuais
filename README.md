# Manuais -  Fabrica de Software Academica IFSP/PEP

Este repositório é destinado aos manuais dos sistemas desenvolvidos na Fabrica de Software do IFSP/PEP.

Sua utilização se dá por um repositório geral com a necessidade de uma pasta exclusiva para cada manual. Portanto, ao inserir seu manual neste repositório, deve se atentar aos cuidados:

## Estrutura de pastas

```
.
└── 📂 raiz do repositório/
    ├── 📂 [nome-do-projeto]/
    │   └── 📄 conteúdo-estático.[html/js/md]
    │
    ├── 📂 [nome-do-projeto]/
    │   └── 📄 conteúdo-estático.[html/js/md]
    │
    └── 📂 [nome-do-projeto]/
        └── 📄 conteúdo-estático.[html/js/md]
```

Atente-se em **não mexer** em outros arquivos para evitar conflitos e deixar o nome do projeto igual ao nome do repositório do mesmo!

## Bom uso

Para evitar conflitos, busque desenvolver/colar o manual do seu sistema em **outra branch** copiada da `main` e faça o merge com a `main` atualizada:

### Passos

```
git clone https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/Manuais.git`
git checkout -b nova-branch
git add .
git commit -m "adicionando manual do projeto [nome-do-projeto]"
git checkout main
git pull
git merge main nova-branch
git add .
git commit -m "merge: adicionando [nome-do-projeto]"
git push -u origin main
```

### Acesse e verifique

Se tudo ocorreu tudo bem, sua página deve estar disponível em:
https://fabrica-de-software-academica-ifsp-pep.github.io/Manuais/nome-da-pasta-no-repositorio/