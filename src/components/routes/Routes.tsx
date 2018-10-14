import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { FeedContainer } from '../../containers/feed/FeedContainer';
import { SignUpContainer } from '../../containers/sign-up/SignUpContainer';
import { LoginContainer } from '../../containers/login/LoginContainer';
// import { AddLink } from '../../containers/add-link/AddLink';
import * as React from 'react';
import { RoutesModal } from './RoutesModal';

export class Routes extends React.Component<RouteComponentProps> {
  private previousLocation = this.props.location;

  public componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  public render(): JSX.Element {
    const { location } = this.props;
    const isModal = location.state && location.state.modal; // not initial render
    console.log(isModal);
    return <React.Fragment>
      <Switch location={ isModal ? this.previousLocation : location }>
        <Route path='/feed' component={FeedContainer} />
        <Route path='/sign-up' component={SignUpContainer} />
        <Route path='/login' component={LoginContainer} />
      </Switch>
      { isModal ? <RoutesModal /> : null }
    </React.Fragment>
  }
}