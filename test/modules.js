fs.writeFile(
	'C://Users/Harco/Desktop/test/new_folder/hello.txt',
	'hello world',
	{},
	(err) => {
		if (err) {
			console.log(err);
		}
	}
);
