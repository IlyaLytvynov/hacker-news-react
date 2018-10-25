import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './Modal.scss';
import { SyntheticEvent } from 'react';

const modalRoot = document.getElementById('modal-root')!;

export interface IModalProps {
  onClose(): void;
}

export interface IModalChildProps {
  close?<T = any, R = any>(result?: R): T
}

export class Modal extends React.Component<IModalProps, {}> {
  private el: HTMLElement;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  public componentDidMount(): void {
    modalRoot.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    modalRoot.removeChild(this.el);
  }

  public goBack = (e: SyntheticEvent) => {
    e.stopPropagation();
    this.props.onClose()
  };

  public onOutletClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    this.goBack(e);
  };

  public preventClose = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  public render(): JSX.Element | undefined {
    return ReactDOM.createPortal(
      <div className={'modal__outlet'} onClick={this.onOutletClick}>
        <div className="modal__content" onClick={this.preventClose}>
          <button className={'modal__close'} onClick={this.goBack}>Close</button>
          {this.props.children}
        </div>
      </div>,
      this.el,
    );
  }
}