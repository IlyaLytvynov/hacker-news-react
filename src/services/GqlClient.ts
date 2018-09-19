import ApolloClient from 'apollo-boost';
import { configs } from '../configs/AppConfig';

export const client = new ApolloClient({
  uri: configs.GQL_URL
});