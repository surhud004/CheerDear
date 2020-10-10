import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: `"Rubik", sans-serif`,
    fontWeight: 400,
    fontSize: 20
  },
  palette: {
    primary: { main: '#05386B' },
    background: {
      default: '#5CDB95'
    }
  },
  overrides: {
    MuiButton: { 
      root: { 
        borderRadius: '20px',
        padding: '10px',
        backgroundColor: '#05386B',
        color: '#EDF5E1',
        '&:hover': {
          backgroundColor: '#379683',
        },
      },
    },
  },
});
