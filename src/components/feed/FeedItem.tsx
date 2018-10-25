import * as React from 'react';
import { ILink } from '../../models/Link';

interface IProps extends ILink{
  number: number;
}

export class FeedItem extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const { description, postedBy, number } = this.props;
    console.log(this.props);
    return <div className={'feed-item'}>
      <div className="feed-item__order-number">
        {number}
      </div>
      <div className="feed-item__description">
        {description}
      </div>
      <div className="feed-item__author">{postedBy.email}</div>
    </div>
  }
}
