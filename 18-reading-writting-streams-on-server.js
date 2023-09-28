const http = require("http");
const fs = require("fs");
// sending data in chunks to the client is way better some reasons are improve scalability and reduce memory usage
const server = http.createServer((req, res) => {
	fs.createReadStream("./content/big.txt", "utf8").pipe(res);
});
server.listen(5000);
