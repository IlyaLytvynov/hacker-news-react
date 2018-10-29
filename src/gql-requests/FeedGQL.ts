import gql from 'graphql-tag';

export const LINKS: any = gql`
    query Feed($filter: String, $orderBy: LinkOrderByInput, $first: Int) {
      feed(filter: $filter, orderBy: $orderBy, first: $first) {
        links {
          url
          description
          id
          votes {
              user {
                  name
              }
          }
          postedBy {
              name
              email
          }
          createdAt
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
        createdAt
        votes {
          id
          user {
              name
          }
        }
        postedBy {
          name
          email
        }
      }
    }
`;

export const VOTE_MUTATION: any = gql`
    mutation VoteMutation($linkId: ID!) {
        vote(linkId: $linkId) {
          id
          link {
            id
            votes {
              id
              user {
                id
              }
            }
          }
          user {
            id
          }
        }
      }
`;