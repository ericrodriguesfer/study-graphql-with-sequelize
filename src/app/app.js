import { ApolloServer } from "apollo-server-express";
import express from "express";

import "../database/index.js";
import schema from "../graphql/schema.js";
import resolvers from "../resolvers/index.js";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

await server.start();

const app = express();

server.applyMiddleware({ app });

export default app;
