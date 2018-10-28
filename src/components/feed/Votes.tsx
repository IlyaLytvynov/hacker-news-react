import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export class Vote extends React.Component<any, any> {
  public render() {
    console.log('VOTES', this.props.votes);
    return  <div className="feed-item__votes">{this.props.votes.length} votes | by{' '}</div>
  }
}