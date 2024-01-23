import { games, reviews, authors } from '../data.js';

export const resolvers = {
  Query: {
    games: () => games,
    game(parent, args) {
      const matchedGame = games.find(game => game.id == args.id);
      return matchedGame;
    },
    reviews: () => reviews,
    authors: () => authors,
  },
};
