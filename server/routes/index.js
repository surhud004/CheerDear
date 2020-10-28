const express = require('express');
const router = express.Router();

const fs = require('fs');

const getRandomMovie = () => {	
	let movieDB = fs.readdirSync(`./data/movies`);
	let randomFileSelector = Math.floor((Math.random() * movieDB.length));
	let randomMovie = JSON.parse(fs.readFileSync(`./data/movies/${movieDB[randomFileSelector]}`, 'utf8'));
	return randomMovie[Math.floor(Math.random() * randomMovie.length)];
};

router.get('/activities/:condition', (req, res) => {
	let condition = req.params.condition;
	switch (condition) {
		case 'happy':
			res.status(200).send({ activities: ['Watch a Movie', 'Cook a Recipe', 'Play a Game']});
			break;
		case 'sad':
			res.status(200).send({ activities: ['Watch a Movie', 'Draw Something', 'Play a Game']});
			break;
		case 'stressful':
			res.status(200).send({ activities: ['Draw Something', 'Meditate', 'Exercise']});
			break;
		case 'depressing':
			res.status(200).send({ activities: ['Read a Book', 'Read some Quotes', 'Relax']});
			break;
		default:
			res.status(400).send({ error: 'Activity not found.' });
			break;
	}
});

router.get('/movie', (req, res) => {
	try {
		let randomMovie = getRandomMovie();
		if(Object.keys(randomMovie).length !== 0) {
			res.status(200).send({ movie: randomMovie });
		} else {
			res.status(400).send({ error: 'Movie not found.' });
		}
	} catch(error) {
		res.status(400).send({ error: 'Movie not found.' });
	}
});

module.exports = router;
