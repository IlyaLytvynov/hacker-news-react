import { IFeedData, IFeedResponse } from './models/FeedResponse';
import * as React from 'react';
import { ADD_LINK, LINKS } from './FeedGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { Feed } from '../../components/feed/Feed';
import { INewLinkFormState, NewLinkForm } from '../../components/new-link-form/NewLinkForm';

export class FeedContainer extends React.Component<{}, IFeedData> {
  public state: IFeedData = {
    links: [],
    counts: 0,
  };

  public updateLinks = (data: IFeedData) => {
    this.setState(state => ({...state, ...data}));
  };

  public addLink = (data: INewLinkFormState) => {
    const mutationOptions = {
      mutation: ADD_LINK,
      variables: {...data}
    };
    GQLResponseFormatter
      .format(client.mutate(mutationOptions), 'post')
      .then((resp) => {
        console.log(resp);
      });
  };

  public componentDidMount(): void {
    const query = {
      query: LINKS
    };

    GQLResponseFormatter
      .format<IFeedResponse, IFeedData>(client.query(query), 'feed')
      .then(this.updateLinks);
  }

  public render(): JSX.Element {
    return <div className={'page'}>
      <NewLinkForm onSubmit={this.addLink}/>
      <Feed {...this.state}/>
    </div>;
  }
}