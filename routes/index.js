var express = require("express");
var router=express.Router();
const cors=require("cors");

var Todo = require("../models/todo");

router.get("/", async (req,res) =>{
    // res.send("hello");
    try {
        const todo = await Todo.find();
        // console.log(todo);
        if(!todo)  return res.status(400).json({ msg: 'No Todo Available' });
    
        res.status(200).json(todo);
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
});

router.post("/",async(req,res) =>{
    // res.send("hi");
    const { todo_item } = req.body;
    //  console.log(req.body);

  // Simple validation
  if (!todo_item) {
    return res.status(400).json({ msg: 'Please enter the field' });
  }

  try {
    const todo = await Todo.findOne({ todo_item });
    if (todo) {
    return res.status(400).json({msg:"Todo item already exists"});
    }

    const newTodo = new Todo({
      todo_item:todo_item
    });

    const savedTodo = await newTodo.save();
    
    if (!savedTodo) return res.status(400).json({msg:"Something went wrong while saving the todo item"});

    res.status(200).json({
     success:true
    });
  } catch (e) {
    return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
  }
});

router.delete("/:id",async(req,res) =>{
    // res.send("deleted");
    try {
        const todo = await Todo.findById(req.params.id);
    
        if(!todo) {
          return res.status(404).json({
            success: false,
            error: 'No todo item found'
          });
        }
    
        await todo.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
});

router.get("/edit/:id",(req,res) =>{
    res.send("edit");
})

router.post("/edit/:id",async(req,res) =>{
    // res.send("edited");
    try {
        // const id = req.params.id;
        // const {update_todo} = req.body;
        // console.log(req.body);

     todo = await Todo.findById(req.params.id)
    //  const { todo_item } = req.body;
    todo.todo_item = req.body.todo_item;
    console.log(req.body.todo_item);
    const newTodo = await todo.save()

        // const newTodo = await Todo.findByIdAndUpdate(id,{todo_item:update_todo});
    
        if(!newTodo) {
          return res.status(404).json({
            success: false,
            error: 'Update Failed'
          });
        }
      
          const savedTodo = await newTodo.save();
        //   console.log(savedTodo);
          if (!savedTodo) return res.status(400).json({msg:"Something went wrong while update the todo item"});
      
          res.status(200).json({
           success:true,
           msg:"Update successfull"
          });
        } catch (e) {
          return res.status(500).json({
              success: false,
              error: 'Server Error'
            });
        }
})


module.exports = router;