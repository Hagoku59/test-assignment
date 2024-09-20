const mysql = require("mysql2");
const express = require("express");

const app = express();
const port = 8000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    }
    console.log("Database connected");
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});

app.post("/posttransaction", (req, res) => {
    console.log("Body:", req.body);
    let sql = `INSERT INTO transactions (dateTime, author, sum, category, comment) VALUES ('${req.body.date}', '${req.body.author}', '${req.body.sum}', '${req.body.category}', '${req.body.comment}')`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Failed to add new transaction");
        } else {
            console.log(result);
            res.send("New transaction added");
        }
    });
});
