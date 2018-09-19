import { IAuthData } from '../../../models/AuthData';

export interface ISignUpResponse {
  data: {
    signup: IAuthData
  }
}