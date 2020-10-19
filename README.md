[![GitHub license](https://img.shields.io/github/license/Lucian1000/graphql-express-nodejs)](https://github.com/Lucian1000/graphql-express-nodejs)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 

[![GitHub forks](https://img.shields.io/github/forks/Lucian1000/graphql-express-nodejs)](https://github.com/Lucian1000/graphql-express-nodejs/network)

[![GitHub stars](https://img.shields.io/github/stars/Lucian1000/graphql-express-nodejs)](https://github.com/Lucian1000/graphql-express-nodejs/stargazers)

# graphql-express-nodejs

This template is used to easily start a GraphQL project, which uses NodeJS and Express.

Currently runs with:

- Express: v4.17.1
- GraphQL: v14.7.0
- Express-GraphQL: v0.9.0

## Getting started

Clone this repo locally:

```bash
git clone https://github.com/Lucian1000/graphql-express-nodejs.git
```

Install dependencies with npm:

```bash
npm i
```

## Developing

To run this project you have to simply type in a command-line: 

```bash
npm start
```

This will start a GraphQL API server at http://localhost:4000.

You can now test the API with this:

```bash
curl -X POST -H 'Content-Type: application/json' -d '{"query": "{persons {name} }" }'
```

### Configs

In <i>src/config/serve-config.ts</i> you can see the development configs, which are used in <i>index.ts</i> to serve the application at http://localhost:4000. As you can see in the code, the config-object changes depending on NODE_ENV variable.

## Included commands

| Commands           | Description              |
|--------------------|--------------------------|
| npm start          | runs 'npm run dev:serve' |
| npm run dev:serve  | runs 'npm run dev:build' then serves the application with development-configs |
| npm run dev:build  | transpiles and copies .graphql files into 'build' folder |
| npm run prod:serve | runs 'npm run prod:build' then serves the application with production-configs |
| npm run prod:build | transpiles and copies .graphql files into 'dist' folder |

