import * as React from 'react';

export class AddLink extends React.Component<{}, {}> {
  public render(): JSX.Element {
    console.log('Added modal');
    console.log(this.props);
    return <h3 style={{color: 'red'}}>Test</h3>
  }
}