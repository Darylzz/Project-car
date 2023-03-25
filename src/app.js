const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");
// const { sequelize } = require("./models");

const app = express();
// sequelize.sync({ force: true });

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log("Start server at port 8000"));
