import gql from 'graphql-tag';

export const SIGN_UP: any = gql`
    mutation SignUp(
      $email: String!,
      $password: String!,
      $name: String!
    ) {
        signup(email: $email, password: $password, name: $name) {
            token
            user {
                name
                email
                id
            }
        }
    }
`;
