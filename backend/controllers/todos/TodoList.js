const Sequelize = require("sequelize");
const connection = require("../../database/connection");

const Todo = connection.define('todos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Todo.sync({ force: true });
module.exports = Todo;
