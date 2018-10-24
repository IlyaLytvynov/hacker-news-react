import * as React from 'react';
import { Modal } from './Modal';
import { ReactElement } from 'react';

export class OpenModal extends React.Component<{title: string}, {isShown: boolean}> {
  public state: any = {
    isShown: false,
  };

  public openModal = () => {
    this.setState((state) => ({...state, isShown: true}))
  };

  public closeModal = () => {
    this.setState((state) => ({...state, isShown: false}))
  };

  public render(): any {
    return <>
      <button onClick={this.openModal}>{this.props.title}</button>
      { this.state.isShown ? <Modal onClose={this.closeModal}>{React.Children.map(this.props.children, (child) => {
        return React.cloneElement<any>(child as ReactElement<any>, {close: this.closeModal});
      })}</Modal> : null }
    </>
  }
}
