import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import "./db/connection";

import { buildSchema } from "type-graphql/dist/utils";
import { UsersResolver } from "./resolvers/usersResolvers";

import path from "node:path";

dotenv.config();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: path.resolve(__dirname, "shema.gql"),
    validate: false,
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen({ port: 3003 });

  console.log(`Rodando em ${url}`);
}

bootstrap();
