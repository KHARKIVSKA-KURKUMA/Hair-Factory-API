const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

global.basedir = __dirname;
/* --------------------------------- Routes --------------------------------- */
const authRouter = require("./routes/api/auth");
const enrolmentRouter = require("./routes/api/enrollments");
/* --------------------------------- SWAGGER -------------------------------- */
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

/* ---------------------------------- Path ---------------------------------- */
app.use("/users/", authRouter);
app.use("/enrollments/", enrolmentRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
/* -------------------------------------------------------------------------- */
app.use(express.static("public"));
app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
