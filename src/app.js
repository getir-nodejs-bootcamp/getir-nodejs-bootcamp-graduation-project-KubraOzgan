const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const { RecordRoutes } = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

config();
loaders();

const app = express();
app.use(express.json());
app.set('json spaces', 2);

const logger = fs.createWriteStream(path.join(__dirname, "logs", "logger.log"), { flags: "a"});
app.use(morgan("combined", { stream: logger }));

app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`);
    app.use("/records", RecordRoutes);

    app.use((req, res, next) => { 
        const error = new Error("Not found the request you're looking for.");
        error.status = 404;
        next(error); //Send this error to errorHandler
      });
      app.use(errorHandler);
});

