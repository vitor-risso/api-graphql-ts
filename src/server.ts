import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server';
import CategoryResolvers from "./graphql/category/CategoryResolver";

import './utils/connection';
import VideoResolver from "./graphql/video/VideoResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ CategoryResolvers , VideoResolver]
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
