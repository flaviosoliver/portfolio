const projects = [
  {
    id: 'proj01',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 03 - Introdução à HTML e CSS',
    name: 'Lessons Learned',
    alias: 'project-lessons-learned',
    stack: ['HTML', 'CSS'],
    description:
      'Criar um site que com uma série de informações a respeito do que foi aprendido nos três blocos iniciais do curso na Trybe, estilizado de forma apropriada.',
    image: '/assets/img/ProjectLessonsLearned.png',
    repo: 'https://github.com/flaviosoliver/project-lessons-learned',
    deploy: 'https://flaviosoliver.github.io/project-lessons-learned/',
    focus: 'Trybe',
  },
  {
    id: 'proj02',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 04 - Introdução à JavaScript e Lógica de Programação',
    name: 'Playground Function',
    alias: 'project-playground-functions',
    stack: ['JavaScript'],
    description: 'Implementar funções a partir de requisitos.',
    image: '/assets/img/ProjectPlaygroundFunctions.png',
    repo: 'https://github.com/flaviosoliver/project-playground-functions',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj05',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 05 - JavaScript: DOM, Eventos e Web Storage',
    name: 'Arte com Pixels',
    alias: 'project-pixels-art',
    stack: ['JavaScript', 'DOM'],
    description:
      'Implementar um editor de arte com pixels. Ou seja, dada uma paleta de cores e um quadro composto por pixels, permitir que quem usa consiga pintar o que quiser no quadro!',
    image: '/assets/img/ProjectPixelsArt.png',
    repo: 'https://github.com/flaviosoliver/project-pixels-art',
    deploy: 'https://flaviosoliver.github.io/project-pixels-art/',
    focus: 'Trybe',
  },
  {
    id: 'proj06',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 05 - JavaScript: DOM, Eventos e Web Storage',
    name: 'Meme Generator',
    alias: 'project-meme-generator',
    stack: ['JavaScript', 'DOM'],
    description:
      'Criar uma página com Gerador de Meme, fazer upload de uma imagem para a página e adicione algum texto sobre ela.',
    image: '/assets/img/ProjectMemeGenerator.png',
    repo: 'https://github.com/flaviosoliver/project-meme-generator',
    deploy: 'https://flaviosoliver.github.io/project-meme-generator/',
    focus: 'Trybe',
  },
  {
    id: 'proj07',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 05 - JavaScript: DOM, Eventos e Web Storage',
    name: 'Lista de tarefas',
    alias: 'project-todo-list',
    stack: ['JavaScript', 'DOM'],
    description:
      'Construir uma página para controle de Lista de Tarefas, integrando conhecimentos de HTML , CSS e JavaScript.',
    image: '/assets/img/ProjectTodoList.png',
    repo: 'https://github.com/flaviosoliver/project-todo-list',
    deploy: 'https://flaviosoliver.github.io/project-todo-list/',
    focus: 'Trybe',
  },
  {
    id: 'proj08',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 06 - HTML e CSS: Forms, Flexbox e Responsivo',
    name: 'Página inicial do Facebook',
    alias: 'project-facebook-signup',
    stack: ['JavaScript', 'CSS', 'HTML'],
    description:
      'Recriar o icônico layout da tela de cadastro da rede social mais acessada do mundo, o Facebook, com uma audiência de mais de 2,3 bilhões de usuários por mês.',
    image: '/assets/img/ProjectFacebookSignup.png',
    repo: 'https://github.com/flaviosoliver/project-facebook-signup',
    deploy: 'https://flaviosoliver.github.io/project-facebook-signup/',
    focus: 'Trybe',
  },
  {
    id: 'proj09',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 07 - Introdução à JavaScript ES6 e Testes Unitários',
    name: 'JavaScript Testes Unitários',
    alias: 'project-js-unit-tests',
    stack: ['NodeJS', 'Unit Test', 'JavaScript'],
    description:
      'Implementar funções a partir de requisitos e testes unitários, utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções.',
    image: '/assets/img/ProjectJsUnitTests.png',
    repo: 'https://github.com/flaviosoliver/project-js-unit-tests',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj10',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 08 - Higher Order Functions do JavaScript ES6',
    name: 'Zoo Functions',
    alias: 'project-zoo-functions',
    stack: ['JavaScript', 'Higher Order Functions'],
    description:
      'Simular um sistema de relatório de um zoológico. Você desenvolverá um conjunto de funções capazes de recuperar vários tipos de informações acerca do zoológico e de seu funcionamento. O sistema possui informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam.',
    image: '/assets/img/ProjectZooFunctions.png',
    repo: 'https://github.com/flaviosoliver/project-zoo-functions',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj11',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 09 - JavaScript Assíncrono e Promises',
    name: 'Carrinho de Compras',
    alias: 'project-shopping-cart',
    stack: ['Async', 'Promises'],
    description:
      'Desenvolver um carrinho de compras. Este projeto visa colocar em prática todo o conteúdo aprendido sobre Web Storage e assincronicidade em JavaScript .',
    image: '/assets/img/ProjectShoppingCart.png',
    repo: 'https://github.com/flaviosoliver/project-shopping-cart',
    deploy: 'https://flaviosoliver.github.io/project-shopping-cart/',
    focus: 'Trybe',
  },
  {
    id: 'proj12',
    module: 'Trybe - Mód. I - Fundamentos do Desenvolvimento Web',
    block: 'Bloco 10 - Testes automatizados com Jest',
    name: 'Jest Assíncrono e Mocking',
    alias: 'project-jest',
    stack: ['Jest', 'Testes', 'Mock'],
    description:
      'Implementar testes utilizando o Jest para verificar o correto funcionamento de uma série de funções.',
    image: '/assets/img/ProjectJest.png',
    repo: 'https://github.com/flaviosoliver/project-jest',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj13',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 11 - Introdução à React',
    name: 'Movie Cards Library',
    alias: 'project-movie-cards-library',
    stack: ['React'],
    description:
      'Desenvolver site usando React, onde este será uma biblioteca de cartões contendo informações sobre filmes.',
    image: '/assets/img/ProjectMovieCardsLibrary.png',
    repo: 'https://github.com/flaviosoliver/project-movie-cards-library',
    deploy: 'https://flaviosoliver.github.io/project-movie-cards-library/',
    focus: 'Trybe',
  },
  {
    id: 'proj14',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 12 - Componentes com Estado, Eventos e Formulários com React',
    name: 'Movie Cards Library Stateful',
    alias: 'project-movie-card-library-stateful',
    stack: ['React'],
    description:
      'Neste projeto também vai desenvolver uma biblioteca de filmes, tornando-a dinâmica via interação do usuário! Deve-se gerenciar estado e integrá-lo com capturas de eventos e formulários.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-movie-card-library-stateful',
    deploy:
      'https://flaviosoliver.github.io/project-movie-card-library-stateful/',
    focus: 'Trybe',
  },
  {
    id: 'proj15',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 13 - Ciclo de Vida de Componentes e React Router',
    name: 'Movie Cards Library CRUD',
    alias: 'project-movie-card-library-crud',
    stack: ['React', 'CRUD', 'React Router', 'Lifecycle Methods'],
    description:
      'Agora a biblioteca terá diversas rotas, cada uma responsável por uma parte da funcionalidade. Desenvolver um app que permite criar, atualizar, visualizar e apagar cartões, colocando em prática os conceitos de React Router e Lifecycle Methods',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-movie-card-library-crud',
    deploy: 'https://flaviosoliver.github.io/project-movie-card-library-crud/',
    focus: 'Trybe',
  },
  {
    id: 'proj16',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 14 - Metodologias Ágeis',
    name: 'Frontend Online Store',
    alias: 'project-frontend-online-store',
    stack: ['Kanban', 'React'],
    description:
      'Construir o Front-End de um e-commerce, uma loja online, alimentada por uma API do Mercado Livre. Projeto em grupo! O objetivo é sedimentar tudo o que foi aprendido sobre React até aqui, enquanto praticam a organização de um projeto em time com a metodologia ágil e Kanban.',
    image: '',
    repo: 'https://flaviosoliver.github.io/project-frontend-online-store/',
    deploy: 'https://flaviosoliver.github.io/project-frontend-online-store/',
    focus: 'Trybe',
  },
  {
    id: 'proj17',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 15 - Testes automatizados com React Testing Library',
    name: 'Testes em React',
    alias: 'project-react-testing-library',
    stack: ['RTL', 'React', 'Testes'],
    description: 'Escrever testes automatizados para uma aplicação React.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-react-testing-library',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj18',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 16 - Gerenciamento de estado com Redux',
    name: 'Trybe Wallet',
    stack: ['Redux', 'React'],
    alias: 'project-trybewallet',
    description:
      'Criar uma aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida por quem usa. Utilizando Redux para gerenciamento de estado do React.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-trybewallet',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj19',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 17 - Projeto Jogo de Trivia',
    name: 'Jogo de Trivia',
    stack: ['Kanban', 'React', 'Redux'],
    alias: 'project-trivia-react-redux',
    description:
      'Desenvolver um jogo de perguntas e respostas baseado no jogo Trivia, parecido um show do milhão americano, utilizando React e Redux. Projeto em Grupo.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-trivia-react-redux',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj20',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 18 - Context API e React Hooks',
    name: 'StarWars DataTable com Context API e Hooks',
    stack: ['Context API', 'Hooks', 'React'],
    alias: 'project-starwars-datatable-hooks',
    description:
      'Desenvolver uma tabela por meio de uma Requisição API, com dados de Planetas dos filmes StarWars, utilizando Context API e Hooks para controle de filtros.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-starwars-datatable-hooks',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj21',
    module: 'Trybe - Mód. II - Desenvolvimento Front-end',
    block: 'Bloco 19 - Projeto App de Receitas',
    name: 'App de Receitas',
    stack: ['Redux', 'Context API', 'Hooks', 'Kanban', 'Figma'],
    alias: 'project-recipes-app',
    description:
      'Desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas. Utilizando conceitos de Redux, Context API e React Hooks. Projeto em grupo.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-recipes-app',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj22',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 20 - Introdução à SQL',
    name: 'All For One',
    stack: ['SQL', 'Banco de Dados', 'MySQL'],
    alias: 'project-mysql-all-for-one',
    description:
      'Projeto com três níveis de desafios. Cada nível trabalhará habilidades diferentes: Desafios de SELECT e criação de dados; Desafios sobre filtragem de dados; Desafios de manipulação de tabelas. Com modelagem de dados N:1.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mysql-all-for-one',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj23',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 21 - Funções SQL, Joins e Subqueries',
    name: 'Vocabulary Booster',
    stack: ['SQL', 'MySQL', 'Banco de Dados'],
    alias: 'project-mysql-vocabulary-booster',
    description:
      'Projeto com os seguintes desafios, em que trabalhará habilidades diferentes: Controle de fluxo com condicionais; Operações matemáticas; Lidando com datas; Manipulação de strings; Agrupamento de dados; Filtragem de dados; JOINS & UNIONS; Subqueries; Stored routines.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mysql-vocabulary-booster',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj24',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 22 - Normalização e Modelagem de Banco de Dados',
    name: 'One For All',
    stack: ['SQL', 'MySQL', 'Banco de Dados'],
    alias: 'project-mysql-one-for-all',
    description:
      'O projeto passará pelos seguintes desafios, que trabalharão habilidades diferentes: Analisar se duas tabelas não normalizadas; Identificar modificações necessárias para que suas tabelas estejam adequadamente na 1ª, 2ª e 3ª Forma Normais; Criar um banco de dados a partir de uma planilha que contém tabelas e dados; Criar e modelar tabelas;Queries que passam pelos principais comandos SQL vistos até o momento. Relacionamento 1:N',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mysql-one-for-all',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj25',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 23 - Introdução ao MongoDB',
    name: 'Data Flights',
    stack: ['NoSQL', 'MongoDB', 'Banco de Dados'],
    alias: 'project-mongodb-dataflights',
    description:
      'Esse projeto está dividido em três níveis. Cada um deles trabalhará habilidades diferentes. Esses níveis são: Selecionar e contar documentos utilizando filtros simples; Selecionar e contar documentos utilizando filtros avançados e alguns operadores de comparação; Construir queries mais complexas juntando operadores de comparação e operadores lógicos.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mongodb-dataflights',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj26',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 24 - MongoDB: Updates Simples e Complexos',
    name: 'Commerce',
    stack: ['MongoDB', 'NoSQL', 'Banco de Dados'],
    alias: 'project-mongodb-commerce',
    description:
      'Este projeto está dividido em três níveis. Cada um deles trabalhará habilidades diferentes. Esses níveis são: Alterar documentos utilizando métodos de update com operadores simples; Alterar documentos utilizando operadores complexos e modificadores; Construir queries e expressões complexas utilizando índices textuais e expressões regulares.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mongodb-commerce',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj27',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 25 - MongoDB: Aggregation Framework',
    name: 'Aggregations',
    stack: ['MongoDB', 'NoSQL', 'Aggregations', 'Banco de Dados'],
    alias: 'project-mongodb-aggregations',
    description:
      'Esse projeto está dividido em três datasets. Cada um deles trabalhará habilidades diferentes. Esses datasets são: Uma base de dados com filmes, onde faremos várias operações para encontrar dados bem interessantes, além de transformá-los para uma melhor visualização; Uma base de dados com dados de rotas e parcerias de empresas aéreas; Por fim, uma base de dados com registros de utilização de bicicletas na cidade de Nova York.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-mongodb-aggregations',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj28',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 26 - Introdução ao desenvolvimento Web com NodeJS',
    name: 'Crush Manager',
    stack: ['NodeJS', 'API', 'CRUD'],
    alias: 'project-crush-manager',
    description:
      'Construir uma API de cadastro de crushs, onde será possível cadastrar, visualizar, pesquisar, editar e excluir crushs.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-crush-manager',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj29',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 27 - NodeJS: Camada de Serviço e Arquitetura Rest e Restful',
    name: 'Store Manager',
    stack: [
      'NodeJS',
      'MongoDB',
      'MSC',
      'API Restful',
      'CRUD',
      'Banco de Dados',
    ],
    alias: 'project-store-manager',
    description:
      'Arquitetar e desenvolver uma API com banco de dados MongoDB. Desenvolver endpoints para criar, exibir, atualizar e excluir produtos e vendas. Utilizar padrões arquiteturais MSC (model-service-controller). Além disso, exercitar conhecimentos sobre REST, criando uma API completamente RESTful.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-store-manager',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj30',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 28 - Autenticação e Upload de Arquivos',
    name: 'Cookmaster',
    stack: [
      'JWT',
      'Multer',
      'MSC',
      'NodeJS',
      'API Rest',
      'CRUD',
      'Banco de Dados',
    ],
    alias: 'project-cookmaster',
    description:
      'Desenvolver uma aplicação back-end de um sistema de cadastro e pesquisa de receitas, utilizando JWT, Multer, MSC e arquitetura REST! Nela, será possível cadastrar usuários do tipo cliente e admin. Apenas usuários do tipo admin terão acesso a todas as receitas cadastradas; já os usuários do tipo client devem ter permissão para disparar qualquer tipo de ação apenas em suas próprias receitas cadastradas.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-cookmaster',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj31',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 29 - Deployment',
    name: 'Stranger Things',
    stack: ['Deploy', 'Heroku', 'PM2'],
    alias: 'project-stranger-things',
    description:
      'Existem dois projetos-base que deverão ser atualizados. Um projeto consiste em uma API que traz uma lista com os personagens da série Stranger Things. O outro projeto é um front-end que exibe as informações retornadas pela API em uma tabela, fornecendo também um campo para filtrar pelo nome dos personagens. Adaptar e configurar esses projetos-base (front-end e back-end) para ser feito o deploy no Heroku. Utilizar, também, o PM2 para gerenciar e monitorar os processos. Além disso, parametrizar algumas configurações através de variáveis de ambientes, além de configurar a comunicação entre back-end e front-end, utilizando multiambientes.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-stranger-things',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj32',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 30 - Projeto Trybeer',
    name: 'Trybeer',
    alias: 'project-trybeer',
    stack: ['Kanban', 'CRUD', 'API Rest', 'MySQL', 'Banco de Dados'],
    description:
      'Criar uma plataforma de delivery de cerveja. Para facilitar o entendimento, dá para dividirmos a aplicação em três partes: API (compartilhada entre cliente e admin); Front-end cliente (onde o cliente vai comprar a cerveja); Front-end admin (onde o estabelecimento controla os pedido feitos). Projeto em Grupo!',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-trybeer',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj33',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 31 - Arquitetura: SOLID e ORM',
    name: 'API de Blogs',
    alias: 'project-blogs-api',
    stack: ['SOLID', 'ORM', 'CRUD', 'Sequelize', 'MySQL', 'Banco de Dados'],
    description:
      'Desenvolver e testar uma API para um Blog, além de um banco de dados. Usando como exemplo a API do Blogger. Nela, terá um CRUD de postagens com uma camada de autenticação de pessoas usuárias.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-blogs-api',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj34',
    module: 'Trybe - Mód. III - Desenvolvimento Back-end',
    block: 'Bloco 32 - Sockets',
    name: 'Webchat',
    stack: ['Sockets', 'Socket.io', 'MVC'],
    alias: 'project-webchat',
    description:
      'Desenvolver uma aplicação com um front-end e um back-end sobre um chat, utilizando tudo o que aprendemos nas aulas sobre sockets e socket.io! Nela será possível listar todas as pessoas conectadas no chat e, além de poder enviar mensagens no chat global, quem usa também poderá enviar mensagens privadas para outras pessoas. Além disso, organizar o seu código seguindo a arquitetura MVC.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-webchat',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj35',
    module: 'Trybe - Mód. IV - Ciência da Computação',
    block: 'Bloco 35 - Introdução ao Python e Raspagem de Dados da Web',
    name: 'Tech News',
    stack: ['Python', 'Data Scraping', 'MongoDB', 'Banco de Dados'],
    alias: 'project-tech-news',
    description:
      'Desenvolver um projeto que tem como principal objetivo fazer consultas em notícias sobre tecnologia. Para isso será necessário criar um banco de dados, obter dados para popular este banco e preparar consultas a serem feitas nestas notícias. As notícias podem ser obtidas através da raspagem das últimas notícias do TecMundo (https://www.tecmundo.com.br/novidades)',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-tech-news',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj36',
    module: 'Trybe - Mód. IV - Ciência da Computação',
    block: 'Bloco 36 - Programação Orientada a Objetos e Design Patterns',
    name: 'Inventory Reports',
    stack: ['Python', 'POO'],
    alias: 'project-inventory-report',
    description:
      'Utilizando a Programação Orientada a Objetos, implementar um gerador de relatórios que recebe como entrada arquivos com dados de um estoque e gera, como saída, um relatório acerca destes dados. Esses dados de estoque poderão ser obtidos de diversas fontes: Através da importação de um arquivo CSV; Através da importação de um arquivo JSON; Através da importação de um arquivo XML; Além disso, o relatório final deverá poder ser gerado em duas versões: simples e completa.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-inventory-report',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj37',
    module: 'Trybe - Mód. IV - Ciência da Computação',
    block: 'Bloco 37 - Algoritmos e Estrutura de Dados',
    name: 'Algorithms',
    stack: ['Algoritmo', 'Python'],
    alias: 'project-algorithms',
    description:
      'Resolver problemas e otimizar algoritmos do tipo que aparecem em inúmeros processos de entrevista por whiteboard e aceleraram muito a de resolver problemas. Pessoas desenvolvedoras de software, além de serem muito boas em implementações, devem, também, ser boas resolvendo problemas e otimizando algoritmos. Esse projeto irá treinar, ainda mais, a capacidade de resolução de problemas e otimização de código, que envolve algumas habilidades: Lógica; Capacidade de interpretação do problema; Capacidade de interpretação de um código legado; Capacidade de resolução do problema, de forma otimizada; Resolver o problemas/Otimizar algoritmos mesmo sob pressão.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-algorithms',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj39',
    module: 'Trybe - Mód. IV - Ciência da Computação',
    block: 'Bloco 38 - Estrutura de Dados: Nó e Listas',
    name: 'Restaurant Orders',
    stack: ['Python', 'Hash Map', 'Set', 'Dict'],
    alias: 'project-restaurant-orders',
    description:
      'A lanchonete Pão na Chapa, atualmente, possui um sistema de faturamento dos pedidos dos clientes, que salva o nome da pessoa, o pedido realizado, e dia do atendimento (dia da semana). O projeto consiste em ajudar a lanchonete a melhorar esse sistema para que ele possibilite extração de relatórios e, num segundo momento, a controlar seu estoque.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-restaurant-orders',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj40',
    module: 'Trybe - Mód. IV - Ciência da Computação',
    block: 'Bloco 39 - Estrutura de Dados: Pilhas, Deques e Listas',
    name: 'TING - Trybe Is Not Google',
    stack: [
      'Python',
      'Pilhas',
      'Deque',
      'Nó',
      'Listas',
      'Listas Ligadas',
      'Listas Duplamente Ligadas',
    ],
    alias: 'project-ting',
    description:
      'Implementar um programa que simule o algoritmo de indexação de documentos similar ao do Google. Ou seja, um programa que permita anexar arquivos de texto e posteriormente opere funções de busca sobre tais arquivos e analisar palavras. O objetivo será identificar ocorrências de termos em arquivos TXT. Neste contexto, criar um programa que permita anexar arquivos de texto e posteriormente operar funções de busca sobre tais arquivos. Sendo assim o programa deverá possuir dois módulos: Modo gerenciamento de arquivos e Modo de buscas.',
    image: '',
    repo: 'https://github.com/flaviosoliver/project-ting',
    deploy: '',
    focus: 'Trybe',
  },
  {
    id: 'proj41',
    module: '',
    block: '',
    name: 'WhatsApp Useful',
    stack: [
      'TypeScript',
      'Angular',
      'Angular Material',
      'Angular Forms',
      'SASS',
    ],
    alias: 'whatsapp-useful',
    description:
      'Criar uma página Web de layout agradável utilizando Angular v15 onde seja possível chamar a API do WhatsApp e poder iniciar uma conversa sem a premissa de ter esse contato salvo na agenda.',
    image: '/assets/img/WhatsAppUseful.png',
    repo: 'https://github.com/flaviosoliver/whatsapp-useful',
    deploy: 'https://flaviosoliver.github.io/whatsapp-useful/',
    focus: 'Pessoal',
  },
];

export default projects;
