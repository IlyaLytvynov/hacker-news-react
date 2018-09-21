import { GQLResponseFormatter } from '../services/GQLResponseResolver';
import { client } from '../services/GqlClient';
import { LOG_IN } from '../gql-requests/LoginGQL';
import { IAuthData } from '../models/AuthData';
import { SIGN_UP } from '../gql-requests/SignUpGQL';
import { ISignUpInput } from '../models/SignUpInput';
import { ILoginInput } from '../models/LoginInput';

export class UserProvider {
  public static login(data: ILoginInput): Promise<IAuthData> {
    const options = {
      mutation: LOG_IN,
      variables: data
    };

    return GQLResponseFormatter
      .format(client.mutate(options), 'login');
  }

  public static signUp(data: ISignUpInput): Promise<IAuthData> {
    const options = {
      mutation: SIGN_UP,
      variables: data,
    };

    return GQLResponseFormatter.format(client.mutate(options), 'signup');
  }
}