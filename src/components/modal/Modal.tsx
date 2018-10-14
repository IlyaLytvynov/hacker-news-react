import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './Modal.scss';
import { RouteComponentProps } from 'react-router';

const modalRoot = document.getElementById('modal-root')!;


export class Modal extends React.Component<RouteComponentProps> {
  private el: HTMLElement;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.goBack = this.goBack.bind(this);
  }

  public componentDidMount(): void {
    modalRoot.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    modalRoot.removeChild(this.el);
  }

  public goBack() {
    console.log(this.props);
    this.props.history.goBack();
  }

  public render(): JSX.Element {

    return ReactDOM.createPortal(
      <div className={'modal__outlet'}>
        <div className="modal__content">
          <button className={'modal__close'} onClick={this.goBack}>Close</button>
          { this.props.children }
        </div>
      </div>,
      this.el,
    );
  }
}