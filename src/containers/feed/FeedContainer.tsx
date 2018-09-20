import { IFeedData } from './models/FeedResponse';
import * as React from 'react';
import { ADD_LINK } from './FeedGQL';
import { client } from '../../services/GqlClient';
import { GQLResponseFormatter } from '../../services/GQLResponseResolver';
import { Feed } from '../../components/feed/Feed';
import { INewLinkFormState, NewLinkForm } from '../../components/new-link-form/NewLinkForm';
import { feedStore } from '../../stores/FeedStore';
import { observer } from 'mobx-react';

@observer
export class FeedContainer extends React.Component<{}, IFeedData> {
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
    feedStore.setLinks();
  }

  public render(): JSX.Element {
    const { links, counts } = feedStore;
    debugger;
    return <div className={'page'}>
      <NewLinkForm onSubmit={this.addLink}/>
      <Feed links={links} counts={counts} />
    </div>;
  }
}