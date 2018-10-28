import * as React from 'react';
import { ILink } from '../../models/Link';
import './FeedItem.scss';
import { timeDifferenceForDate } from '../../utils/time-utils';
import { observer, inject } from 'mobx-react';
import { FeedStore } from 'src/stores/FeedStore';
import { UserStore } from 'src/stores/UserStore';

interface IProps extends ILink {
  number: number;
  feedStore?: FeedStore,
  userStore?: UserStore
}

@inject('feedStore')
@inject('userStore')
@observer
export class FeedItem extends React.Component<IProps> {
  public render(): JSX.Element {
    const { id, description, postedBy, number, createdAt, url, votes, feedStore, userStore } = this.props;

    return <div className={'feed-item'}>
      <div className="feed-item__order-number">
        <span>{number}</span>
        {userStore!.isAuthenticated && (
          <div className="" onClick={() => feedStore!.voteForLink(id)}>
            ▲
          </div>
        )}
      </div>
      <div className="feed-item__content">
        <a href={url} target={'blank'} className="feed-item__description">
          {description}
        </a>
        <div className="feed-item__additional-info">
          <div className="feed-item__votes">{votes.length} votes | by{' '}</div>
          <div className="feed-item__author">{postedBy.email}</div>
          <div className="feed-item__author">{postedBy.name}</div>
          <div className="feed-item__date">{timeDifferenceForDate(createdAt)}</div>
        </div>
      </div>
    </div>
  }
}
