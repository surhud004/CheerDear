import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: `"Rubik", sans-serif`,
    fontWeight: 400,
    fontSize: 20
  },
  palette: {
    primary: { main: "#05386B" },
    background: {
      default: "#5CDB95"
    }
  },
  overrides: {
    MuiButton: { 
      root: { 
        borderRadius: '30px', 
        padding: '10px'
      }, 
    }, 
  },
});
