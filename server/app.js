const express = require('express');
const { join } = require('path');
const PORT = process.env.PORT || 3000;
var app = express();

const indexRouter = require('./routes/index');

app.use(express.static(join(__dirname, '../client/build')));
app.use('/', indexRouter);

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
