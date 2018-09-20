import { ILink } from './Link';

export interface IFeedData {
  links: Array<ILink>;
  counts: number;
}

export interface IFeedResponse {
  data: {
    feed: IFeedData;
  }
}

