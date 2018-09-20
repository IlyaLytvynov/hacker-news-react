import gql from 'graphql-tag';

export const LINKS: any = gql`
    {
        feed {
            links {
                url
                description
                id
                postedBy {
                    name
                    email
                }
            }
        }
    }
`;
