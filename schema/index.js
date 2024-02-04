export const typeDefs = `#graphql

  type Game {
    id: ID!
    name: String!
    release_year: String!
    platforms: [String!]!
  }

  type Review {
    id: ID!
    author_id: Int!
    game_id: ID!
    title: String!
    content: String
    author: Author!
    game: Game!
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
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
`;
