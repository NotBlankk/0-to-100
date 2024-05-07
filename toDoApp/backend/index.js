const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.sucess) {
    res.status(411).json({
      msg: "You sent Wrong inputs",
    });
    return;
  }
  //put it in mongodb
});

app.get("/todo", function (req, res) {
  console.log("Start");
});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.sucess) {
    res.status(411).json({
      msg: "You sent the wring inputs",
    });
    return;
  }
});

app.listen(3000);
