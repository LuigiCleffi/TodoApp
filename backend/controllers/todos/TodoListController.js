const express = require("express");
const slugify = require("slugify");
const router = express.Router()
const TodoList = require("./TodoList")


router.get("/todos", (req, res) => {
    const {titleList} = req.body
    if (!titleList) return res.status(400).json({ message: "Title is required" });
    const slug = slugify(titleList).toLowerCase();
    return res.json({title: titleList, slug: slug})
})

router.post("/newTodo", (req, res) => {
    const {titleList} = req.body

    if(!titleList) return res.status(400).json({message: "Title is required"})
    TodoList.create({
        title: titleList,
        slug: slugify(titleList).toLowerCase()
    }).then(() =>{
        return res.json({title: titleList, slug: slugify(titleList).toLowerCase()})
    } )
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "Error creating todo"})
    })
})
module.exports = router