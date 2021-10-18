# rd-on-api

## Start do Projeto
Para startar a API fake, antes instale globalmente a dependência `json-server` globalmente e execute:

```bash
  $ json-server --watch example-server.json
  ```
  
Para startar o projeto, execute o comando
```bash
  $ yarn start
```

## Execução de merge local
Para executar o merge local, ou seja, trazer alterações de outras branchs para a sua, siga o exemplo abaixo, no caso traremos alterações da branch master para a nossa feature branch feature/DICO-123

```bash
  $ git checkout master
```

```bash
  $ git pull origin master
```

```bash
  $ git checkout feature/DICO-123
```

```bash
  $ git merge master
```

Caso queira fazer o merge com a branch desenvolvida pelo colega, utilize o comando ```git fetch``` para baixar a branch e então efetue o ```checkout``` nela normalmente.

