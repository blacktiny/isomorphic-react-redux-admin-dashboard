const userData = require('./user.data');
const resolvers = {
  Query: {
    user(uid) {
      return userData;
    },
  },
};

module.exports = resolvers;
