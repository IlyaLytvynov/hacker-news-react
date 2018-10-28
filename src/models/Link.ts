import { IUser } from './User';
import { IVote } from './Vote';
import { INewLinkInput } from './INewLinkInput';

export interface ILink extends INewLinkInput {
  id: string;
  postedBy: IUser;
  createdAt: string;
  votes: Array<IVote>;
}