const http = require('http');

const server = http.createServer((request, response) => {
	response.end('Hello from service Two!');
});

server.listen(8080, () => console.log(`Server is listening!`));
