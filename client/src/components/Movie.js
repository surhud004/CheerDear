import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Card,
	Typography,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    LinearProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    background: {
      backgroundImage: 'url("../banner1.png")',
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
      width: '600px',
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

const Movie = (props) => {
    const classes = useStyles();

    const [movie, setMovie] = useState(null);


    const getMovie = async () => {
		try {
			const res = await axios.get('/movie');
            await setMovie(res.data.movie);
		} catch (error) {
			console.log('Error getting Movie.');
		}
	};

    useEffect(() => {
        if(props.condition !== undefined && props.activity !== undefined) {
            getMovie();
        } else {
            setMovie(null);
        }
    }, [props.condition, props.activity]);

    if(movie) {
        return (
            <Container className={classes.background}>
            <Typography variant="h3" className={classes.heading}>
                Here's a movie for you -
            </Typography>
            <Grid container direction="row" justify="center" spacing={4}>
                <Grid item xs={12} sm={12} md={12} align="center">
                    <Card className={classes.card}>
                        <CardMedia>
                            <img src="../movie.png" alt="movie" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                {movie.title}
                            </Typography>
                            <Typography className={classes.cardtitle}>
                                {movie.description}
                            </Typography>
                            <Typography className={classes.cardtitle}>
                                Genre : {movie.category}
                            </Typography>
                            <Typography className={classes.cardtitle}>
                                IMDB Rating : {movie.imdb_rating}
                            </Typography>
                            <Typography className={classes.cardtitle}>
                                Release Date : {movie.date_released}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button color="primary">
                            Watch on Netflix
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        );
    } else {
        return <LinearProgress/>;
    }
};

export default Movie;