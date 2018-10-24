import * as React from 'react';
import { Switch } from 'react-router-dom';

export class RoutesModal extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return <React.Fragment>
      <Switch>
        {/*<Route path={'/add-link'} render={({...props}) => <Modal {...props}><AddLink {...props}/></Modal> }/>*/}
      </Switch>
    </React.Fragment>
  }
}