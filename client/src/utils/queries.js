import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
  query users {
    users {
      _id
      name
      events
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query singleEvent($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      events
    }
  }
`;
