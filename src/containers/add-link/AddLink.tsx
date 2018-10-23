import * as React from 'react';
import { INewLinkFormState, NewLinkForm } from '../../components/new-link-form/NewLinkForm';
import { FeedStore } from '../../stores/FeedStore';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';

interface IFeedContainerProps extends RouteComponentProps {
  feedStore?: FeedStore;
}

@inject('feedStore')
@observer
export class AddLink extends React.Component<IFeedContainerProps, {}> {
  constructor(props: IFeedContainerProps) {
    super(props);
    this.addLink = this.addLink.bind(this);
  }
  public addLink(newLink: INewLinkFormState) {
    this.props.feedStore!.addLink('asdasd').then(() => console.log('SUCCEDD'));
  }

  public render(): JSX.Element {
    return <NewLinkForm onSubmit={this.addLink}/>
  }
}