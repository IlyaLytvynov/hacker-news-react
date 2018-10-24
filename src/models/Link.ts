import { IUser } from './User';
import { IVote } from './Vote';
import { INewLinkInput } from './INewLinkInput';

export interface ILink extends INewLinkInput {
  postedBy: IUser;
  votes: Array<IVote>;
}