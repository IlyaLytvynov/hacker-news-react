import * as React from 'react';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

interface INewLinkFormState {
  url: string;
  description: string;
}

export class NewLinkForm extends React.Component<{}, INewLinkFormState> {
  public state: INewLinkFormState = {
    url: '',
    description: ''
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: INewLinkFormState) => ({...state, [name]: value}));
  };

  public render(): JSX.Element {
    const {url, description} = this.state;
    const isDisabled = !url || !description;
    return <form className={'new-link-form'}>
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