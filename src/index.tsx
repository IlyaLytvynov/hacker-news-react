import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App as Test } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Test title='Test'/>,
  document.getElementById('test') as HTMLElement
);
registerServiceWorker();
