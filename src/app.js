const express = require("express");
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log("Start server at port 8000"));
