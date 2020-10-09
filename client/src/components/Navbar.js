import React from 'react';
import {
	Toolbar,
	AppBar,
	Box,
	Typography,
	IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#8EE4AF',
		position: 'sticky',
		color: theme.palette.primary.main
	},
	toolbar: {
		flexWrap: 'wrap'
	},
	toolbarTitle: {
		flexGrow: 1,
		fontFamily: `"Rubik", sans-serif`,
		fontWeight: 500
	},
	margin: {
		margin: theme.spacing(1)
	}
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar color="primary" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					component={RouterLink}
					to="/"
					color="primary"
					aria-label="landing"
					className={classes.margin}
				>
				</IconButton>
				<img src="logo.png" alt="logo" />
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					<Box letterSpacing={4} m={1}>
						CHEERDEAR
					</Box>
				</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;