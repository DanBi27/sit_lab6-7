const express = require("express");
const app = express();
var ids = 0;
var students = [];

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  res.send(students[req.params.id]);
});

app.post("/students", (req, res) => {
  let date = new Date();
  var student = {
    id: ids++,
    firstname: req.query.firstname,
    lastName: req.query.lastName,
    group: req.query.group,
    createdAt: date.toLocaleString(),
    updatedAt: date.toLocaleString()
  };
  students.push(student);
});

app.get("/", (req, res) => {
  res.send("start page");
});

app.put("/students/:id", (req, res) => {
  let date = new Date();
  const student = req.body;
  students.push({
    id: ids(),
    ...student,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString()
  });
  res.json({ message: "Students create" });
  console.log(`createdAt : ${date.toISOString()}`);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter((student) => student.id !== req.params.id);
  res.json({ message: "Students delete" });
});
app.listen(8080); //the server object listens on port 8080
