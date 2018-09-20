import * as React from 'react';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { SyntheticEvent } from 'react';

export interface INewLinkFormState {
  url: string;
  description: string;
}

interface INewLinkFormProps {
  onSubmit(data: INewLinkFormState): void;
}

export class NewLinkForm extends React.Component<INewLinkFormProps, INewLinkFormState> {
  public state: INewLinkFormState = {
    url: '',
    description: ''
  };

  public changeHandler = (value: string, name: string) => {
    this.setState((state: INewLinkFormState) => ({...state, [name]: value}));
  };

  public submit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onSubmit(this.state);
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