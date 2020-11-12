const express = require('express');
const app = express();
const PORT = 3000;
const { StringDecoder } = require('string_decoder');
const path = require('path');
const fs = require('fs');
const model = fs.readFileSync(path.join(__dirname, 'model', 'model.json'), {
	encoding: 'utf-8'
});

console.log(model);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
