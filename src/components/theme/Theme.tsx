import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
});

export const Palete: React.SFC = (props) => {
  return <MuiThemeProvider theme={theme} >
    {
      props.children
    }
  </MuiThemeProvider>
};
