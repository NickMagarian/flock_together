const { User, Calendar } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    calendar: async (parent, args,context) => {
     
      return Calendar.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = await User.create(args);
      const token= signToken(newUser)
      return {token,newUser};
    },
  },
};

module.exports = resolvers;