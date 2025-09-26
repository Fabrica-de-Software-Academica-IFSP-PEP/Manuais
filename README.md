# Manuais -  Fabrica de Software Academica IFSP/PEP

Este repositório é destinado aos manuais dos sistemas desenvolvidos na Fabrica de Software do IFSP/PEP.

Sua utilização se dá por um repositório geral com a necessidade de uma pasta exclusiva para cada manual. Portanto, ao inserir seu manual neste repositório, deve se atentar aos cuidados:

## Inb4

Cuidado com caminhos absolutos no seu projeto de documentação, opte por utilizar caminhos relativos

Além disso, por padrão, o Jekill (Construtor de páginas) não lê diretórios começados com _ (underscore).

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

### Passos

```
***faça um fork do projeto***
git clone https://github.com/[nome-de-usuario]/Manuais.git`
***crie sua pasta com o nome adequado***
***coloque suas alterações na sua pasta***
git add .
git commit -m "adicionando [nome-do-projeto]"
git push -u origin main
***abra uma pull request***
```

### Acesse e verifique

Se tudo ocorreu tudo bem, sua página deve estar disponível em:
https://fabrica-de-software-academica-ifsp-pep.github.io/Manuais/nome-da-pasta-no-repositorio/