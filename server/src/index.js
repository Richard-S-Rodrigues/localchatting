const express = require("express");
const app = express();
const logger = require("morgan");

const port = 3003;

app.use(logger("dev"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
