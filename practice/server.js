const express = require("express");
const app = express();

const PORT = 8081;

app.get("/home", (req, res) => {
  res.send("get request");
});
app.post("/home", (req, res) => {
  res.send("post request");
});

app.delete("/home", (req, res) => {
  res.send("delete request");
});

app.use((req, res) => {
  res.send("middlware request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error at server launch", err);
  }
  console.log(`Server launched at port: ${PORT}`);
});
