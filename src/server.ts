import "reflect-metadata";
import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import * as path from 'path';
import { configEnvs } from "./config.env";
import Container from "typedi";

async function bootstrap() {

  dotenv.config();
  configEnvs();

  const graphQLSchema = await buildSchema({
    resolvers: [path.join(__dirname, '..') + '/**/*.resolver.{ts,js}'],
    container: Container,

  });

  const server = new ApolloServer({
    schema: graphQLSchema,
    cors: true,
  });

  server.listen({ port: 4000 }, console.log('Server is running'));
}

bootstrap();