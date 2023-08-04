const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ashishdb");
  console.log("mongodb connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());
const port = 3000;
// CRUD Operations;
server.get("/", (req, res) => {
  res.send("Hello World! form server !!!");
});
server.post("/welcome", async (req, res) => {
  let user = new User();
  user.userName = req.body.userName;
  user.password = req.body.password;
  const doc = await user.save();
  console.log(doc);
  res.send(doc);
});

server.get("/welcome", async (req, res) => {
  const docs = await User.find();
  res.json(docs);
});

server.listen(port, () => {
  console.log(`server listening on port http://localhost${port}`);
});
