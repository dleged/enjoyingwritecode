const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const SampleDatasource = require('./datasource/sampleDatasource');
const SpaceXDatasource = require('./datasource/spacexDatasource');
const typeDefs = importSchema('./schema/schema.graphql');
const resolvers = {
    Query: {
        sampleData: (root, _args, { dataSources }) => dataSources.sampleDatasource.sampleData(),
        rockets: (root, _args, { dataSources }) => dataSources.spacexDatasource.rockets()
    }
  };
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
       sampleDatasource: new SampleDatasource(),
       spacexDatasource: new SpaceXDatasource()
    })
  });
server.timeout = 0;
server.listen('9000').then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});