const express = require("express");
const bodyParser = require("body-parser");
const connection = require("../database/connection")
const todoListController = require("../controllers/todos/TodoListController");
const cors = require("cors");

const port = 3000

const app = express();
app.set('view engine', 'jsx');
let reactEngine = require('react-engine');
app.engine('jsx', reactEngine.server.create());

app.use(bodyParser.urlencoded({extended: false}))
//Body Parser - Aceita os dados do formulário e aceita JSON
app.use(bodyParser.json())

connection
.authenticate()
.then(() => console.log("Connected successfully"))
.catch(err => console.log("Connection error: " + err))

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use("/", todoListController)

app.listen(port, ()=> console.log("Running on Port 8080"))