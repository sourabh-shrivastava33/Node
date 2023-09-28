const { createReadStream } = require("fs");
// File size : 21kb
// we can pass second arguments to the createReadStream that will be an object
// {highWaterMark:number}=> the control the file size
// {encoding:"utf8"}=> convert buffer to string

const readStream = createReadStream("./content/big.txt", {
	highWaterMark: 10050,
	encoding: "utf8",
});
readStream.on("data", (chunk) => {
	console.log(chunk);
});
readStream.on("error", (err) => {
	console.log(err);
});
