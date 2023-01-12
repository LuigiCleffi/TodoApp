const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../database/connection")
const todoListController = require("../controllers/todos/TodoListController");
const path = require('path')
const cors = require("cors");

const port = 3000

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended: false}))
//Body Parser - Aceita os dados do formulário e aceita JSON
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => console.log("Connected successfully"))
    .catch(err => console.log("Connection error: " + err))

app.use("/", todoListController)

app.listen(port, ()=> console.log("Running on Port 8080"))