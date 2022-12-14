const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    events: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(UserId: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addEvent(userId: ID!, event: String!): User
    removeUser(userId: ID!): User
    removeEvent(userId: ID!, event: String!): User
  }
`;

module.exports = typeDefs;
