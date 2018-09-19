import { IAuthData } from '../../../models/AuthData';

export interface ILoginResponse {
  data: { login: IAuthData };
}