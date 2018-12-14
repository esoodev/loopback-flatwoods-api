import {FlatwoodsApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import express = require('express');
import request = require('request-promise-native');
import graphqlHTTP = require('express-graphql');

const {createGraphQlSchema} = require('oasgraph');

export {FlatwoodsApiApplication};

export async function main(options: ApplicationConfig = {}) {
  /**
   * RUN LOOPBACK APPLICATION
   */
  const app = new FlatwoodsApiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Loopback server is running at ${url}`);

  /**
   * RUN OASGRAPH
   */
  if (true) {
    let oas = await request.get(`${app.restServer.url}/openapi.json`);

    const {schema, report} = await createGraphQlSchema(JSON.parse(oas), {
      addSubOperations: true,
    });
    const graphqlServer = express();
    graphqlServer.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      }),
    );
    graphqlServer.listen(3001);
    console.log(`OASGraph server is running at port 3001/graphql`);
  }

  return app;
}
