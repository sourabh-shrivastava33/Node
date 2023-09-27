const os = require("os");
const currentOs = {
	name: os.hostname(),
	uptime: os.uptime(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};
console.log(currentOs);
