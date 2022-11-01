const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}\t${}\t${}\t${}\t${}`, "errLog.log");
    console.log(err.Stack);
};