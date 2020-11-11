// requiring in express module (external) must install express first *always the same*
const express = require('express');
// initializing express *always the same*
const app = express();
// requiring path (built-in) module
const path = require('path');
// Define a port should try to find a environment PORT if that doesn't exist (undefined) then will default to 3000
const PORT = process.env.PORT || 3000;

// This allows us to serve .js .css and additional necessary files located in the public folder (static is the other popular naming convention)
app.use(express.static(path.join(__dirname, 'public')));

// pass along request to route
app.use('/', require('./routes/root'));
app.use('/about', require('./routes/about'));
app.use('/api', require('./routes/api'));

// What port should the server listen to
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}...`);
});
