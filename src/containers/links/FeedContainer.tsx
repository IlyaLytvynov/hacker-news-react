import { IFeedData, IFeedResponse } from './models/FeedResponse';
import * as React from 'react';
import { LINKS } from './LinksGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { Feed } from '../../components/feed/Feed';

export class FeedContainer extends React.Component<{}, IFeedData> {
  public state: IFeedData = {
    links: [],
    counts: 0
  };

  public updateLinks = (data: IFeedData) => {
    this.setState(state => ({...state, ...data}));
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
      <Feed {...this.state}/>
    </div>;
  }
}