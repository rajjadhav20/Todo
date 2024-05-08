const express = require("express");
const app = express();
const cors = require("cors");
require("./configs/userdb");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
require('dotenv').config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
