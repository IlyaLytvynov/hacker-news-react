import { GQLResponseFormatter } from '../services/GQLResponseResolver';
import { client } from '../services/GqlClient';
import { LOG_IN } from '../gql-requests/LoginGQL';
import { IAuthData } from '../models/AuthData';

export class UserProvider {
  public static login(data: any): Promise<IAuthData> {
    const options = {
      mutation: LOG_IN,
      variables: data
    };

    return  GQLResponseFormatter
      .format(client.mutate(options), 'login');
  }
}