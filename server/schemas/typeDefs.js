const { gql } = require('apollo-server-express');
// model names and column names need to match this page
const typeDefs = gql`
  type Event {
    _id:ID! 
    title:String!
    description:String!
    date:String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password:String!
    events:[Event]
  }

input EventInput{
  title:String!
  description:String!
  date:String!
}

input UserInput {
  name: String!
  email: String!
  password:String!
}
type Auth {
    token: String!
    user: User
}
# all the data you need to get you need a query for
  type Query {
    user: User
    events(userId: String!): [Event]
    event(id: String!): Event
  }

  # when we want the server to do something we use mutation
  # think of buttons
  type Mutation {
    addUser(userInput:UserInput): Auth
    login(): Auth 
    createEvent(eventInput:EventInput):Event
    addEventToUser(): User
  }
`;
// type of mutation what params or args for login
// what args to add event to calendar
// what args to add event to user
module.exports = typeDefs;