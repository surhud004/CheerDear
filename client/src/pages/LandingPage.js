import React from 'react';
import {
	Box,
	Typography,
  Container,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';

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
    paddingTop: '20px',
    paddingBottom: '20px',
    marginTop: '10px'
  },
	margin: {
		margin: theme.spacing(1)
	}
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Navbar />
        <Container className={classes.background}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="inherit" className={classes.heading}>
                <Box letterSpacing={2} m={1}>
                  Feel the relaxation at home when you are quarantined.
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  );
};

export default LandingPage;