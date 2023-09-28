const { writeFileSync } = require("fs");
for (let i = 1; i < 100000; i++) {
	writeFileSync("./content/big.txt", `This is big file ${i}\n`, { flag: "a" });
}
