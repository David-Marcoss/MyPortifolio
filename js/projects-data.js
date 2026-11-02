/**
 * @typedef {Object} ProjectDetailsData
 * @property {string} description
 * @property {string} problem
 * @property {string[]} features
 * @property {string[]} contributions
 * @property {string[]} [challenges]
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {'professional'|'personal'} category
 * @property {string[]} technologies
 * @property {string} [projectUrl]
 * @property {string} [repositoryUrl]
 * @property {boolean} featured
 * @property {ProjectDetailsData} [details]
 */

/** @type {Project[]} */
const PROJECTS = [
  {
    "id": "workobras",
    "name": "WorkObras",
    "description": "Plataforma de gestão integrada para obras e processos da construção civil.",
    "image": "img/projects/workObras.png",
    "category": "professional",
    "technologies": [
      "React",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "Stripe",
      "GitLab"
    ],
    "featured": true,
    "projectUrl": "https://www.workobras.com.br/",
    "details": {
      "description": "Plataforma SaaS de gestão de obras com aproximadamente 125 módulos funcionais.",
      "problem": "Organizar processos de gestão de obras em uma plataforma integrada.",
      "features": [
        "Compras e orçamentos.",
        "Medições contratuais e gestão financeira.",
        "Controle de permissões e acesso por plano.",
        "Assinaturas e webhooks com Stripe."
      ],
      "contributions": [
        "Estruturação inicial do front-end e back-end.",
        "Desenvolvimento de funcionalidades de negócio e integração com Stripe.",
        "Interfaces responsivas, APIs REST e testes automatizados."
      ]
    }
  },
  {
    "id": "flytour",
    "name": "Flytour Serra Gaúcha",
    "description": "Aplicativo de viagens e turismo para compra de passagens.",
    "image": "img/projects/flytour.png",
    "category": "professional",
    "technologies": [
      "React",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "Docker",
      "GitLab"
    ],
    "featured": false,
    "projectUrl": "https://play.google.com/store/apps/details?id=com.wopus.flytourapp&hl=pt_BR"
  },
  {
    "id": "vialeeduca",
    "name": "VialeEduca",
    "description": "Plataforma educacional com videoaulas e e-books para crianças e jovens.",
    "image": "img/projects/sistema_viale.png",
    "category": "professional",
    "technologies": [
      "NestJS",
      "React",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Node.js"
    ],
    "featured": false,
    "projectUrl": "https://vialeeduca.com.br/"
  },
  {
    "id": "thoreb",
    "name": "Thoreb Itinerário",
    "description": "Thoreb Itinerário é um sistema de itinerário de transportes, desenvolvido com Angular e Rust.",
    "image": "img/projects/sistema_thoreb.png",
    "category": "professional",
    "technologies": [
      "Angular",
      "Rust",
      "Docker",
      "MySQL"
    ],
    "featured": true,
    "projectUrl": "https://editor.thorebbrasil.com.br/login?returnUrl=%2F",
    "details": {
      "description": "Thoreb Itinerário é um sistema de itinerário de transportes, desenvolvido com Angular e Rust.",
      "problem": "Apoiar a gestão de itinerários de transportes.",
      "features": [
        "Gestão de itinerários de transportes."
      ],
      "contributions": [
        "Manutenção e evolução da aplicação em Rust e Angular.",
        "Refatorações, otimizações e implementação de recursos voltados à produtividade dos usuários."
      ]
    }
  },
  {
    "id": "route14",
    "name": "Route:14",
    "description": "Plataforma web para gerenciar rotas e viagens.",
    "image": "img/projects/Route14.png",
    "category": "personal",
    "technologies": [
      "Angular",
      "TypeScript",
      "Flask",
      "PostgreSQL"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/platform-test"
  },
  {
    "id": "meu-treino",
    "name": "Plataforma Meu Treino",
    "description": "Plataforma para criar treinos e dietas personalizadas.",
    "image": "img/projects/Meu-terino-home.png",
    "category": "personal",
    "technologies": [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/Plataforma_MeuTreino"
  },
  {
    "id": "dev-academy",
    "name": "Dev Academy",
    "description": "Plataforma web para criação de cursos online e acesso às aulas disponíveis.",
    "image": "img/projects/DevAcademy-home.png",
    "category": "personal",
    "technologies": [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/DEV_Academy"
  },
  {
    "id": "my-shop",
    "name": "My-Shop: AWS Microservices",
    "description": "API REST para e-commerce com microsserviços distribuídos na AWS.",
    "image": "img/projects/my-shop.png",
    "category": "personal",
    "technologies": [
      "Python",
      "API Gateway",
      "Lambda Functions",
      "DynamoDB"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/MyShop-AWS-Serverless-Microsservices"
  },
  {
    "id": "docker",
    "name": "Projeto Docker",
    "description": "Aplicação em contêineres Docker com comunicação assíncrona por mensageria.",
    "image": "img/projects/ArquiteturaProjetoDocker.jpeg",
    "category": "personal",
    "technologies": [
      "Python",
      "Docker",
      "RabbitMQ",
      "MySQL"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/Projeto_Doker/"
  },
  {
    "id": "space-music",
    "name": "Space Music",
    "description": "Reprodutor desktop para listar e reproduzir músicas MP3 do computador.",
    "image": "img/projects/tela_musicas.png",
    "category": "personal",
    "technologies": [
      "Python",
      "PyQt5",
      "PyGame"
    ],
    "featured": false,
    "repositoryUrl": "https://github.com/David-Marcoss/Space_Music"
  }
];
