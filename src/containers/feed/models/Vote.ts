import { ILink } from './Link';
import { IUser } from '../../../models/User';

export interface IVote {
  id: string;
  link: ILink;
  user: IUser;
}