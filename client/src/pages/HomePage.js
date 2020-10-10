import React from 'react';
import {
    Card,
    CardContent,
	Typography,
    Container,
    Grid,
    CardActionArea,
    CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: 'url("banner1.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box',
    backgroundSize: 'cover',
    height: 'calc(100vh - 75px)',
  },
  heading: {
    flexGrow: 1,
    fontFamily: `"Rubik", sans-serif`,
    fontWeight: 500,
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#05386B',
    textAlign: 'center'
  },
  card: {
    height: '100%',
    width: '200px',
    backgroundColor: '#05386B',
    textAlign: 'center'
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%',
    paddingTop: '10px'
  },
  cardtitle: {
    color: '#EDF5E1',
    textAlign: 'center'
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.background}>
        <Typography variant="h3" className={classes.heading}>
            How was your day today?
        </Typography>
        <Grid container direction="row" justify="center" spacing={4}>
            <Grid item xs={12} sm={6} md={3} align="center">
                <Card className={classes.card}>
                    <CardActionArea
                        component={RouterLink}
                        to={`backend`}
                    >
                        <CardMedia>
                            <img src="happy.png" alt="happy" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                Happy
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <Card className={classes.card}>
                    <CardActionArea
                        component={RouterLink}
                        to={`backend`}
                    >
                        <CardMedia>
                            <img src="stressful.png" alt="stressful" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                Stressful
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <Card className={classes.card}>
                    <CardActionArea
                        component={RouterLink}
                        to={`backend`}
                    >
                        <CardMedia>
                            <img src="sad.png" alt="sad" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                Sad
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} align="center">
                <Card className={classes.card}>
                    <CardActionArea
                        component={RouterLink}
                        to={`backend`}
                    >
                        <CardMedia>
                            <img src="depressing.png" alt="depressing" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                Depressing
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Container>
  );
};

export default HomePage;