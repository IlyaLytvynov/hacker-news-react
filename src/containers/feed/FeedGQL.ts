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


export const ADD_LINK: any = gql`
    mutation Post($url: String!, $description: String!) {
        post(url: $url, description: $description) {
            id
            description
            url
            postedBy {
                name
                email
            }
        }
    }
`;