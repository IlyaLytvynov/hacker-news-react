import { UserStore } from './../stores/UserStore';
import { ApolloClient } from 'apollo-client';

import { configs } from '../configs/AppConfig';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: configs.GQL_URL,
});

export class GQLClient {
  public static get client(): ApolloClient<any> {
    return this.instance.client;
  }
  public static createClient(userStore: UserStore): GQLClient {
    return this.instance || (this.instance = new GQLClient(userStore));
  }
  
  private static instance: GQLClient;

  public readonly client: ApolloClient<any>;

  constructor(
    private _userStore: UserStore,
  ) {
    this.client = new ApolloClient({
      link: this.createAuthLink().concat(httpLink),
      cache: new InMemoryCache()
    });
  }

  private createAuthLink(): any {
    return setContext((_, { headers }) => {
      const token = this._userStore.token;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        }
      }
    });
  }
}