import { ApolloClient, InMemoryCache } from "@apollo/client";

const NEXT_HYGRAPH_ENDPOINT = process.env.NEXT_HYGRAPH_ENDPOINT;

// Initialize Apollo Client
export const createGraphQLclient = () =>
  new ApolloClient({
    uri: NEXT_HYGRAPH_ENDPOINT,
    cache: new InMemoryCache(),
  });

const globalForGraphQl = globalThis;

export const graphQLclient = globalForGraphQl.gql ?? createGraphQLclient();

if (process.env.NODE_ENV !== "production") globalForGraphQl.gql = graphQLclient;
