export const typeDefs = `#graphql

  type Game {
    id: ID!
    name: String!
    release_year: String!
    platforms: [String!]!
  }

  type Review {
    id: ID!
    author_id: ID!
    game_id: ID!
    title: String!
    content: String
  }

  type Author {
    id: ID!
    name: String!
    country: String!
  }

  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    authors: [Author]
  }
`;
