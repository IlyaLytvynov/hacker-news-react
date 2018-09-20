import * as React from 'react';
import { ILink } from '../../containers/links/models/Link';

export class FeedItem extends React.PureComponent<ILink> {
  public render(): JSX.Element {
    const {description, postedBy} = this.props;

    return <div className={'feed-item'}>
      <h3 className="feed-item__description">{description}</h3>
      <div className="feed-item__author">{postedBy.name}</div>
    </div>
  }
}
