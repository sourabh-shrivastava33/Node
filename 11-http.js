const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Hello welcome to the homepage");
	} else if (req.url === "/about") {
		res.end("This is our history");
	} else {
		res.end(`
		<h1>OOps the route ${req.url} not found</h1>
		<p>We don't serve here</p>
		<a href="/">Back home</a>
		`);
	}
});
server.listen(5000);
