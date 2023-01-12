const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../database/connection")
const todoListController = require("../controllers/todos/TodoListController");
const cors = require("cors");


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
//Body Parser - Aceita os dados do formulário e aceita JSON
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => console.log("Connected successfully"))
    .catch(err => console.log("Connection error: " + err))

app.use("/", todoListController)

app.listen(8080, ()=> console.log("Running on Port 8080"))