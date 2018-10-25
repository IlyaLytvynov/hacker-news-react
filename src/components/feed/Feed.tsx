import * as React from 'react';
import { ILink } from '../../models/Link';
import { FeedItem } from './FeedItem';

export interface IFeedProps {
  links: Array<ILink>;
  counts: number;
}

export class Feed extends React.PureComponent<IFeedProps> {
  public render(): JSX.Element {
    const links = this.props.links
      .map((link, i) => (<FeedItem number={i} key={i} {...link} />));

    return <div className={'feed'}>
      {links}
    </div>
  }
}
