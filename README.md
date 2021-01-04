# Desafio Nexti React

Esse desafio prático é uma das fases do processo seletivo da NEXTI para desenvolvedor React.js. As [instruções do desafio podem ser encontradas neste link](https://bitbucket.org/presenca/desafio-nexti-react/src/master/)

---

## Foi iniciado com Create React App

O projeto foi iniciado com este comando

```sh
yarn create react-app desafio-nexti-react
```

_yarn create está disponível em Yarn 0.25+_

para rodar este comando é necessário ter o **yarn** com versão igual ou superior a 0.25 instalado. Caso necessário segue o [link para instalação do yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable)

Caso deseje, segue um link para saber mais sobre o [Create React App](https://github.com/facebook/create-react-app).

---

# Documentação

Caso deseje rodar este projeto localmente em sua máquina, primeiro faça o clone deste **Repo** e em seguida na pasta raiz do projeto rode este comando para instalar as dependências:

```sh
yarn install
```

:heavy_exclamation_mark: **é necessário ter o yarn instalado!** Caso não tenha siga as instruções do link mencionado acima

Depois das dependências instaladas o projeto já está pronto para ser executado em sua máquina e agora já pode rodar os scripts 😊

## Scripts

Neste projeto você poderá executar estes scripts

### `yarn start`

Executa o projeto em mode de desenvolvimento.

Na pasta raiz do projeto execute o comando:

```sh
yarn start
```

Abra no seu navegador [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

A página será recarregada com alterações no código.
Você também poderá ver registros no console do navegador.

---

### `yarn test`

Executa todos os tests do projeto

Na pasta raiz do projeto execute o comando:

```sh
yarn test
```

Caso deseje mais informações sobre os tests veja este link: [executando tests](https://facebook.github.io/create-react-app/docs/running-tests)

---

### `yarn build`

Compila o aplicato para produção na pasta `build`.\
Agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.
Seu aplicativo está pronto para deploy! 😄

Na pasta raiz do projeto execute o comando:

```sh
yarn build
```

Para saber mais sobre deploy consulte este link: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

---

## Decisões Técnicas

### TypeScript

Foi escolhido o desenvolvimento em `TypeScript` em vez de `JavaScript` primeiramente para mostrar que tenho essa capacidade. Quem desenvolve em `TypeScript` também desenvolve em `JavaScript` sem dificuldades.

Além disso, essa ferramenta também foi usada para detectar mais erros em compilação e menos em execução, melhor manutenção do código e outras vantagens.

Caso queira saber mais sobre o `TS` acesse: [typescriptlang.org](https://www.typescriptlang.org/)

---

### Context API

Uma vez que foi desejada a inexistencia de [props driling](https://pt.stackoverflow.com/questions/424755/o-que-%C3%A9-prop-drilling) foi utilizada a ferramenta `Context API` do React para centralizar todos os estados em um só local e estes poderem ser transmitidos para qualquer component que esteja dentro do provedor.

Foi decidido pelo `Context API` ao invés do `Redux` uma vez que o tempo de desenvolvimento era mais importante do que a performance.
Portanto, foi escolhido `Context API` por ser um desenvolvimento mais rápido.
Não entraremos em detalhes das duas tecnologias citadas porém caso deseje saber mais
Seguem dois links
[Context - Documentação React](https://pt-br.reactjs.org/docs/context.html);
[Redux - Documentação](https://redux.js.org/)

---

### Styled Components

A biblioteca `Styled Components` foi usada para facilitar a implementação do tema escuro. Além disso essa também facilita a reutilização de componentes já utilizados.
Para saber mais sobre acesse [styled-components.com](https://styled-components.com/)

---

### i18next

Este framework foi usado para implementar com mais facilidade as traduções, ou seja, para gerenciar qual texto deve ser exibido segundo a língua escolhida.

Para saber mais sobre acesse [i18next.com](https://www.i18next.com/)

## Aprenda Mais

Você pode aprender mais na [documentação do create react app](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React confira a [documentação do react](https://reactjs.org/).
