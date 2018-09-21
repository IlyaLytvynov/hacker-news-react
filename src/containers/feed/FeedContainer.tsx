import { IFeedData } from '../../models/FeedResponse';
import * as React from 'react';
import { ADD_LINK } from '../../gql-requests/FeedGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { Feed } from '../../components/feed/Feed';
import { INewLinkFormState, NewLinkForm } from '../../components/new-link-form/NewLinkForm';
import { inject, observer } from 'mobx-react';
import { FeedStore } from '../../stores/FeedStore';

interface IFeedContainerProps {
  feedStore: FeedStore;
}

@inject('feedStore')
@observer
export class FeedContainer extends React.Component<IFeedContainerProps, IFeedData> {
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
  }

  public render(): JSX.Element {
    const { links, counts } = this.props.feedStore;
    return <div className={'page'}>
      <NewLinkForm onSubmit={this.addLink}/>
      <Feed links={links} counts={counts} />
    </div>;
  }
}