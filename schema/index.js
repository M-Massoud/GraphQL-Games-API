export const typeDefs = `#graphql

  type Game {
    id: ID!
    name: String!
    release_year: String!
    platforms: [String!]!
  }

  type Query {
    games: [Game]
  }
`;
