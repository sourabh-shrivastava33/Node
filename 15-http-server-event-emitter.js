const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
	res.end("hello there");
	console.log("i have started");
});
server.listen(5000);
