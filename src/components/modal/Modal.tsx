import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './Modal.scss';

const modalRoot = document.getElementById('modal-root')!;


export class Modal extends React.Component {
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

  public render(): JSX.Element {
    return ReactDOM.createPortal(
      <div className={'modal__outlet'}>
        <div className="modal__content">
          { this.props.children }
        </div>
      </div>,
      this.el,
    );
  }
}