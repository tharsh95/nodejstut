const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app1")
  .then(() => console.log("Connected"))

  .catch((e) => console.log(e));
// Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
});
const User = mongoose.model("user", userSchema);

app.get("/api/users", async (req, res) => {
  const result = await User.find({});
  return res.status(200).json(result);
});

app.get("/api/user/:id", async (req, res) => {
  const result = await User.findById(req.params.id);
  res.status(200).json(result);
});

app.patch("/api/user/:id", async (req, res) => {
  const result = await User.findByIdAndUpdate(req.params.id, {
    lastName: "Tiws",
  });
  res.status(201).json({ message: "Success" });

});
app.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, gender } = req.body;
  await User.create({
    firstName,
    lastName,
    email,
    gender,
  });
  res.status(201).json({ message: "Success" });
});

app.listen(3000, () => console.log("Server running on 3000"));
