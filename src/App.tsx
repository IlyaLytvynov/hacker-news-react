import * as React from 'react';
import './App.scss';

interface IAppProps {
  title: string;
}

export const App = (props: IAppProps) => <div className="App test hgfdhgf">{ props.title }</div>;
