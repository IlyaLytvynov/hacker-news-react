import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Button } from './Button';

describe('Button', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
