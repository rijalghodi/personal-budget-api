const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config({ path: "./config/config.env" });

const envelopesRouter = require("./routes/envelopes");
const docsRouter = require("./routes/docs");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/api-docs", docsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Budget API App");
});

app.use("/api/v1/envelopes", envelopesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
