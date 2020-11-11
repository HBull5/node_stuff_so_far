const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', cors(), (req, res) => {
	res.send(JSON.stringify({ message: 'hello from our api' }));
});

app.listen(3000, () => {
	console.log(`Server running on port 3000....`);
});
