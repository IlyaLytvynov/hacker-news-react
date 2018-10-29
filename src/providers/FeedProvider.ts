import { ILink } from './../models/Link';
import { ADD_LINK, LINKS, VOTE_MUTATION } from '../gql-requests/FeedGQL';
import { GQLResponseResolver } from '../services/GQLResponseResolver';
import { IFeedData, IFeedResponse } from '../models/FeedResponse';
import { GQLClient } from '../services/GqlClient';
import { FeedRequest, IFeedRequest } from 'src/models/FeedRequest';

export class FeedProvider {
  public static fetchData(data?: IFeedRequest): Promise<Array<ILink>> {
    const query = {
      query: LINKS,
      variables: new FeedRequest(data)
    };
    return GQLResponseResolver
      .format<IFeedResponse, IFeedData>(GQLClient.client.query(query), 'feed').then((resp) => resp.links.reverse());
  }

  public static vote(linkId: string): Promise<any> {
    const options = {
      mutation: VOTE_MUTATION,
      variables: { linkId }
    };
    return GQLResponseResolver.format(GQLClient.client.mutate(options), 'vote');
  }

  public static sendData(data: { url: string, description: string }): Promise<any> {
    const options = {
      mutation: ADD_LINK,
      variables: data,
    };

    return GQLResponseResolver.format<any, any>(GQLClient.client.mutate(options), 'post');
  }
}