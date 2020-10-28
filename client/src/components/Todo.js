import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Card,
	Typography,
    CardActionArea,
    CardMedia,
    CardContent,
    LinearProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
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

const Todo = (props) => {
    const classes = useStyles();

    const [activities, setActivities] = useState(null);

    const activitiesImgMap = new Map([
        ['Watch a Movie', '../movie.png'],
        ['Cook a Recipe', '../recipe.png'],
        ['Play a Game', '../game.png'],
        ['Draw Something', '../draw.png'],
        ['Read a Book', '../book.png'],
        ['Meditate', '../meditate.png'],
        ['Exercise', '../exercise.png'],
        ['Read some Quotes', '../quote.png'],
        ['Relax', '../relax.png'],
    ]);

    const activitiesLinkMap = new Map([
        ['Watch a Movie', 'movie'],
        ['Cook a Recipe', 'recipe'],
        ['Play a Game', 'game'],
        ['Draw Something', 'draw'],
        ['Read a Book', 'book'],
        ['Meditate', 'meditate'],
        ['Exercise', 'exercise'],
        ['Read some Quotes', 'quotes'],
        ['Relax', 'relax'],
    ]);


    const getActivities = async () => {
		try {
			const res = await axios.get('/activities/'+props.condition);
            await setActivities(res.data.activities);
		} catch (error) {
			console.log('Error getting activities');
		}
	};

    useEffect(() => {
        if(props.condition !== undefined) {
            getActivities();
        } else {
            setActivities(null);
        }
    }, [props.condition]);

    if(activities) {
        return (
            <Container className={classes.background}>
            <Typography variant="h3" className={classes.heading}>
                What activity do you want to do?
            </Typography>
            <Grid container direction="row" justify="center" spacing={4}>
                {activities.map((activity, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3} align="center">
                    <Card className={classes.card}>
                        <CardActionArea
                            component={RouterLink}
                            to={`/enter/${props.condition}/activity/${activitiesLinkMap.get(activity)}`}
                        >
                        <CardMedia>
                            <img src={activitiesImgMap.get(activity)} alt="" className={classes.img} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.cardtitle}>
                                {activity}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        );
    } else {
        return <LinearProgress/>;
    }
};

export default Todo;