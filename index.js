const express = require("express");
const app = express();

// definir numero da porta
const port = 3000;
// inciar servidor
app.listen(3000, () => {
  console.log("server is running (express)");
});
