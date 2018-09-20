import { IUser } from '../../../models/User';
import { IVote } from './Vote';

export interface ILink {
  url: string;
  description: string;
  postedBy: IUser;
  votes: Array<IVote>;
}