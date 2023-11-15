const express = require("express");
const app = express();
const { logger } = require("./startup/logger");
require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});
