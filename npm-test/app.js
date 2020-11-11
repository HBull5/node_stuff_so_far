let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000', true);

xhr.onload = function () {
	console.log(this.responseText);
};

xhr.send();
