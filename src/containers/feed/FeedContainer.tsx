import { IFeedData } from '../../models/FeedResponse';
import * as React from 'react';
import { Feed } from '../../components/feed/Feed';
import { inject, observer } from 'mobx-react';
import { FeedStore } from '../../stores/FeedStore';

interface IFeedContainerProps {
  feedStore: FeedStore;
}

@inject('feedStore')
@observer
export class FeedContainer extends React.Component<IFeedContainerProps, IFeedData> {
  public componentDidMount(): void {
    this.props.feedStore.setLinks();
  }

  public render(): JSX.Element {
    const { links, counts } = this.props.feedStore;
    return <div className={'page'}>
      <Feed links={links} counts={counts}/>
    </div>;
  }
}