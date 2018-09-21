import { IFeedData } from '../../models/FeedResponse';
import * as React from 'react';
import { ADD_LINK } from '../../gql-requests/FeedGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { Feed } from '../../components/feed/Feed';
import { INewLinkFormState, NewLinkForm } from '../../components/new-link-form/NewLinkForm';
import { inject, observer } from 'mobx-react';
import { FeedStore } from '../../stores/FeedStore';
import { IReactionDisposer, reaction } from 'mobx';

interface IFeedContainerProps {
  feedStore: FeedStore;
}

@inject('feedStore')
@observer
export class FeedContainer extends React.Component<IFeedContainerProps, IFeedData> {
  private _subscribtions: Array<IReactionDisposer> = [];
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
    this.props.feedStore.setLinks();
    this._subscribtions.push(
      reaction(() => this.props.feedStore.links, (data) => {
        console.log('>>>', data);
      })
    );
  }

  public componentWillUnmount(): void {
    debugger;
    this._subscribtions.forEach((unsubscribe) => unsubscribe())
  }

  public render(): JSX.Element {
    const {links, counts} = this.props.feedStore;
    return <div className={'page'}>
      <NewLinkForm onSubmit={this.addLink}/>
      <Feed links={links} counts={counts}/>
    </div>;
  }
}