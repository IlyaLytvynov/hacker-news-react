import { IAuthData } from './AuthData';

export interface ISignUpResponse {
  data: {
    signup: IAuthData
  }
}