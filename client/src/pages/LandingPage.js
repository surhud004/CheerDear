import React from 'react';
import {
	Box,
	Typography,
  Container,
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: 'url("banner.png")',
    backgroundPosition: '100% 20%',
    backgroundRepeat: 'no-repeat',
  },
	heading: {
		flexGrow: 1,
		fontFamily: `"Rubik", sans-serif`,
    fontWeight: 500,
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#EDF5E1'
  },
  subheading: {
    fontSize: '20px',
    color: '#379683'
  },
  colorvariant: {
    color: '#05386B'
  }
}));

const LandingPage = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.background}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box letterSpacing={2} m={1}>
            <Typography variant="h2" className={classes.heading}>
              Relax at home when you are <span className={classes.colorvariant}>quarantined.</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
            <Box letterSpacing={2} m={1}>
              <Typography className={classes.subheading}>
                Find something interesting to do at home, deer. Cheers!
              </Typography>
            </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <Button
            variant="outlined"
            onClick={() => props.history.push('/enter')}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;