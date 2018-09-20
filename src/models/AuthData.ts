import { IUser } from './User';

export interface IAuthData {
  token: string;
  user: IUser;
}