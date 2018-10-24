import * as React from 'react';
import { SyntheticEvent } from 'react';

import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { FeedStore } from '../../stores/FeedStore';
import { inject, observer } from 'mobx-react';
import { INewLinkInput } from '../../models/INewLinkInput';
import { IModalChildProps } from '../modal/Modal';

interface IProps extends IModalChildProps {
  feedStore?: FeedStore;
}

@inject('feedStore')
@observer
export class NewLinkForm extends React.Component<IProps, INewLinkInput> {
  public state: INewLinkInput = {
    url: '',
    description: ''
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: INewLinkInput) => ({...state, [name]: value}));
  };

  public submit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.feedStore!.addLink(this.state).then(() => {
      this.props.close!();
    });
    // this.props.onSubmit(this.state);
  };

  public render(): JSX.Element {
    const {url, description} = this.state;
    const isDisabled = !url || !description;
    return <form className={'new-link-form'} onSubmit={this.submit}>
      <Input
        placeholder={'Url'}
        value={url}
        name={'url'}
        onChange={this.changeHandler}
      />
      <Input
        placeholder={'Description'}
        value={description}
        name={'description'}
        onChange={this.changeHandler}
      />
      <Button disabled={isDisabled}>Add Link</Button>
    </form>
  }
}