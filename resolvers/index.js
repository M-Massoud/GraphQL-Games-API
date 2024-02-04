import { gamesData, reviewsData, authorsData } from '../data.js';

export const resolvers = {
  Query: {
    games: () => gamesData,
    game(parent, args) {
      const matchedGame = gamesData.find(game => game.id == args.id);
      return matchedGame;
    },
    reviews: () => reviewsData,
    review(parent, args) {
      const matchedReview = reviewsData.find(review => review.id == args.id);
      return matchedReview;
    },
    authors: () => authorsData,
    author(parent, args) {
      const matchedAuthor = authorsData.find(author => author.id == args.id);
      return matchedAuthor;
    },
  },

  Review: {
    game(parent) {
      return gamesData.find(game => game.id === parent.game_id);
    },
  },
};
