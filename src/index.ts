import express from "express";
import graphqlHTTP from "express-graphql";
import { Schema } from "./graphql/schema";
import { Resolver } from "./graphql/resolver";
import { serveConfig } from "./config/serve-config";

async function main() {
    const app = express();
    const schema = await Schema.generate();
    const resolver = await Resolver.generate();
    const customFormatErrorFn = (error: any) => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack ? error.stack.split('\n') : [],
        path: error.path,
    });

    app.get('/graphql', graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: process.env.NODE_ENV === 'development',
        customFormatErrorFn
    }));

    app.post('/graphql', graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: false,
        customFormatErrorFn
    }));

    app.listen(serveConfig.port, serveConfig.host, () => {
        console.log(
            `
            Environment: ${process.env.NODE_ENV}
            Running a GraphQL API server at http://${serveConfig.host}:${serveConfig.port}.
            Press CTRL + C to shutdown.
            `
        );
    });
}

main();