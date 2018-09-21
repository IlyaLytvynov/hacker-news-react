import { LINKS } from '../gql-requests/FeedGQL';
import { GQLResponseFormatter } from '../services/GQLResponseResolver';
import { IFeedData, IFeedResponse } from '../models/FeedResponse';
import { client } from '../services/GqlClient';

export class FeedProvider {
  public static fetchData(): Promise<IFeedData> {
    const query = {
      query: LINKS
    };

    return GQLResponseFormatter
      .format<IFeedResponse, IFeedData>(client.query(query), 'feed');
  }

  public static sendData(): void {
    ///
  }
}