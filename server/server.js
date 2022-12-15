const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');

// * models
const User = require('./models/User');
const Event = require('./models/Event');

// * Load env variables
dotenv.config({ path: '.env' });
// * connect database
connectDB();
const server = express();

server.use(
	'/graphql',
	graphqlHTTP({
		schema: buildSchema(`
        type Event {
          _id: ID!
          title: String!
          description: String!
          date: String!
        }
        type User {
          _id: ID!
          name:String!
          email: String!
          password: String
        }
        input EventInput {
          title: String!
          description: String!
          date: String!
        }
        input UserInput {
          name:String!
          email: String!
          password: String!
        }
        type RootQuery {
            events: [Event!]!
        }
        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
		rootValue: {
			events: () => {
				return Event.find()
					.then((events) => {
						return events.map((event) => {
							return { ...event._doc, _id: event.id };
						});
					})
					.catch((err) => {
						throw err;
					});
			},
			createEvent: (args) => {

		
				const event = new Event({
					title: args.eventInput.title,
					description: args.eventInput.description,
					date: new Date(args.eventInput.date),
					creator: '639943130a51ba781a55141f',
				});
				let createdEvent;
				

				return event
					.save()
					.then((result) => {
						createdEvent = { ...result._doc, _id: result.id };
						return User.findById('639943130a51ba781a55141f');
					})
					.then((user) => {
						if (!user) {
							throw new Error('User not found.');
						}
						user.createdEvents.push(event);
						return user.save();
					})
					.then((result) => {
						return createdEvent;
					})
					.catch((err) => {
						console.log(err);
						throw err;
					});
			},
			createUser: (args) => {
				return User.findOne({ email: args.userInput.email })
					.then((user) => {
						if (user) {
							throw new Error('User exists already.');
						}
						return bcrypt.hash(args.userInput.password, 12);
					})
					.then((hashedPassword) => {
						const user = new User({
							name: args.userInput.name,
							email: args.userInput.email,
							password: hashedPassword,
						});
						return user.save();
					})
					.then((result) => {
						return { ...result._doc, password: null, _id: result.id };
					})
					.catch((err) => {
						throw err;
					});
			},
		},
		graphiql: true,
	})
);

server.listen(process.env.PORT, () =>
	console.log('server is listening at port: ' + process.env.PORT)
);
