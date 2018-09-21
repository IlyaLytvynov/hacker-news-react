import { IAuthData } from './AuthData';

export interface ILoginResponse {
  data: { login: IAuthData };
}