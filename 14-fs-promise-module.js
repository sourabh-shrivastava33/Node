const { readFile, writeFile } = require("fs/promises");
const util = require("util");
// refer 10-fs-module.js to know how much simple that code has become using this this method of promisifying the read and write file
const start = async () => {
	const first = await readFile("./content/first.txt", "utf8");
	const second = await readFile("./content/second.txt", "utf8");
	await writeFile(
		"./content/result-mind-grenade.txt",
		`THIS IS FUCKING AWESOME: ${first} ${second}`,
		{ flag: "a" }
	);
};
start();
