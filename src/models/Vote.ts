import { ILink } from './Link';
import { IUser } from './User';

export interface IVote {
  id: string;
  link: ILink;
  user: IUser;
}