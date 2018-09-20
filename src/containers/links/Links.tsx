import { IFeedData, IFeedResponse } from './models/FeedResponse';
import * as React from 'react';
import { LINKS } from './LinksGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';

// tslint:disable-next-line
interface ILinksProps {}
// tslint:disable-next-line
interface ILinksState extends IFeedData{}

export class Links extends React.Component<ILinksProps, ILinksState> {
  public state: ILinksState = {
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
    const links = this.state
      .links
      .map((link, i) => (<h3 key={i}>{link.description}</h3>));

    return <div className={'page'}>
      {links}
    </div>;
  }
}