import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;