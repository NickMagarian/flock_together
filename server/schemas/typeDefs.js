const { gql } = require('apollo-server-express');
// model names and column names need to match this page
const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    events:[Event]
  }

  type Calendar {
    _id: ID!
    events:[Event]
  } 

input EventInput{
    eventId: String! 
    eventTitle: String! 
    eventDate: Date
}
type Auth {
    token: ID!
    user: User
}
  type Query {
    user: User
    calendar: Calendar
  }

  type Mutation {
    addUser(email:String!,name:String!,password:String!): Auth
    login(): Auth 
    addEventToCalendar(): Calendar 
    addEventToUser(): User
  }
`;

module.exports = typeDefs;
