import * as React from 'react';
import { ILink } from '../../containers/feed/models/Link';

export interface IFeedProps {
  links: Array<ILink>;
  counts: number;
}

export class Feed extends React.PureComponent<IFeedProps> {
  public render(): JSX.Element {
    const links = this.props.links
      .map((link, i) => (<h3 key={i}>{link.description}</h3>));

    return <div className={'feed'}>
      {links}
    </div>
  }
}
