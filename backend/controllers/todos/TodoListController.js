const express = require("express");
const slugify = require("slugify");
const router = express.Router()
const TodoList = require("./TodoList")


router.get("/todos", (req, res) => {
    try{
        TodoList.findAll({
            order: [["title", "ASC"]]
        })
        .then(todos =>{
             res.json({todos: todos})
        })
    }
    catch(e){
        res.sendStatus(500);
    }

})

router.post("/todo/newTodo", (req, res) => {
    const {todo} = req.body
    
    if (!todo) {
        return res.status(400).json({ message: "Todo is required" });
    }
if(todo != undefined) {
    TodoList.create({
        title: todo,
        slug: slugify(todo).toLowerCase()
    }).then(() =>{
        
        return res.json({title: todo, slug: slugify(todo).toLowerCase()}).status(201).send()
    } )
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "Error creating todo"})
    })

}
})

module.exports = router