require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const { logger } = require("./middleware/logger");

const errorHandler = require("./middleware/errorHandler");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const corsOptions = require("./config/corsOptions");

const connectDB = require("./config/dbConnect");
const mongoose = require("mongoose");
const { logger, logEvents } = require("./middleware/logger");

const PORT = process.env.PORT || 3500

connectDB();

app.use(logger);

app.use(cors(corsOptions));

// Built-in Middleware that allows app to receive and parse JSON
app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));

app.use("*", (req, res) => {
    res.status(404);
    if(req.accepts("html")){
        res.sendFile(path.join(__dirname, "views", "404.html"))
    }else if(req.accepts("json")){
        res.json({ message: "404 Not Found" })
    }else{
        res.type("txt").send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

mongoose.connection.on("error", err => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrLog.log");
});