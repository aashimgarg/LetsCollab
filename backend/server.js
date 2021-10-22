const express = require('express');
const app = express();
const cors = require("cors");

const http = require("http").Server(app);
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);

app.get('/',(req,res) => {
  res.status(200).send("Hello World");
})




http.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
