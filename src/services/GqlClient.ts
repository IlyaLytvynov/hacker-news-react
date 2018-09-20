import { ApolloClient } from 'apollo-client';

import { configs } from '../configs/AppConfig';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { LocalStorage } from './LocalStorage';

const httpLink = createHttpLink({
  uri: configs.GQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = LocalStorage.get('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});