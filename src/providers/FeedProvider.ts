import { ADD_LINK, LINKS, VOTE_MUTATION } from '../gql-requests/FeedGQL';
import { GQLResponseResolver } from '../services/GQLResponseResolver';
import { IFeedData, IFeedResponse } from '../models/FeedResponse';
import { GQLClient } from '../services/GqlClient';

export class FeedProvider {
  public static fetchData(): Promise<IFeedData> {
    const query = { query: LINKS };
    return GQLResponseResolver
      .format<IFeedResponse, IFeedData>(GQLClient.client.query(query), 'feed');
  }

  public static vote(linkId: string): Promise<any> {
    const options = {
      mutation: VOTE_MUTATION,
      variables: {linkId}
    };
    return GQLResponseResolver.format(GQLClient.client.mutate(options), 'vote')
  }

  public static sendData(data: {url: string, description: string}): Promise<any> {
    const options = {
      mutation: ADD_LINK,
      variables: data,
    };

    return GQLResponseResolver.format<any, any>(GQLClient.client.mutate(options), 'post');
  }
}