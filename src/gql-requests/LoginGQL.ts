import gql from 'graphql-tag';

export const LOG_IN: any = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                name
                email
            }
        }
    }
`;
