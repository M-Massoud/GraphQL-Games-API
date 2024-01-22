import { games, reviews, authors } from '../data.js';

export const resolvers = {
  Query: {
    games: () => games,
  },
};
