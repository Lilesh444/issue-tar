const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://christin-robinson:gjKNaFgc2fnWsKg8@cluster0.bjf8vxk.mongodb.net/Issue-Tracker?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Database connected successfully!');
	})
	.catch((error) => {
		console.log('Error while connecting to the database', error);
	});
