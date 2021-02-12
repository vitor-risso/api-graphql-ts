import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server';
import CategoryResolvers from "./graphql/category/CategoryResolver";

import './utils/connection';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolvers]
  });

  const server = new ApolloServer({
    schema
  });

  server.listen({
    port: 8080
  }, () => {
    console.log('rodando')
  })

};

bootstrap();
