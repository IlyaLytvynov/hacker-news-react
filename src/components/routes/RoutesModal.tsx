import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Modal } from '../modal/Modal';
import { AddLink } from '../../containers/add-link/AddLink';

export class RoutesModal extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return <React.Fragment>
      <Switch>
        <Route path={'/add-link'} render={({...props}) => <Modal {...props}><AddLink /></Modal> }/>
      </Switch>
    </React.Fragment>
  }
}