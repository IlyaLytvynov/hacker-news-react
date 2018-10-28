import { GQLResponseResolver } from '../services/GQLResponseResolver';
import { GQLClient } from '../services/GqlClient';
import { LOG_IN } from '../gql-requests/LoginGQL';
import { IAuthData } from '../models/AuthData';
import { SIGN_UP } from '../gql-requests/SignUpGQL';
import { ISignUpInput } from '../models/SignUpInput';
import { ILoginInput } from '../models/LoginInput';

export class UserProvider {
  public login(data: ILoginInput): Promise<IAuthData> {
    const options = {
      mutation: LOG_IN,
      variables: data
    };

    return GQLResponseResolver
      .format(GQLClient.client.mutate(options), 'login');
  }

  public signUp(data: ISignUpInput): Promise<IAuthData> {
    const options = {
      mutation: SIGN_UP,
      variables: data,
    };

    return GQLResponseResolver.format(GQLClient.client.mutate(options), 'signup');
  }
}