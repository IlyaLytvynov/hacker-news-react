import { ADD_LINK, LINKS } from '../gql-requests/FeedGQL';
import { GQLResponseResolver } from '../services/GQLResponseResolver';
import { IFeedData, IFeedResponse } from '../models/FeedResponse';
import { client } from '../services/GqlClient';

export class FeedProvider {
  public static fetchData(): Promise<IFeedData> {
    const query = { query: LINKS };
    return GQLResponseResolver
      .format<IFeedResponse, IFeedData>(client.query(query), 'feed');
  }

  public static sendData(data: {url: string, description: string}): Promise<any> {
    const options = {
      mutation: ADD_LINK,
      variables: data,
    };

    return GQLResponseResolver.format<any, any>(client.mutate(options), 'feed');
  }
}