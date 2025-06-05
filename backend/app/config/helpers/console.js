const moment = require("moment");
const { appendToFile } = require("./files");

global._console_log = (...data) => {
  appendToFile(
    "logs",
    "console",
    "log.json",
    `${JSON.stringify({
      date: moment().format("DDMMYYYY.HHmmss"),
      data,
    })},\n`,
  );
  console.log(`[${moment().format("DDMMYYYY.HHmmss")}]`, ...data);
};

module.exports = { _console_log };
