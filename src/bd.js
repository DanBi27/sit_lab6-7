const pg = require("pg");
const db = require("index.js");
const pgConfig = {
  user: "me",
  database: "students",
  password: "271298",
  port: "5432"
};
const pool = new pg.Pool(pgConfig);

pool.connect(function (error, client, done) {
  let sqlStr = "SELECT * FROM students"; // оператор SQL для поиска в таблице
  client.query(sqlStr, [], function (err, response) {
    done();
    console.log(response.rows); // Данные найдены на основе оператора SQL
  });
});
