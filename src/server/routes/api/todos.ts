import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import { ReqUser } from '../../utils/types';

const router = express.Router();

// //Testing example
// router.get('/', (req, res, next) => {
//     res.json('TESTING!!!');
// });


//GET single or all todos
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [todo] = await db.todos.one(id);
            res.json(todo);

        } else {
            const todos = await db.todos.all();
            res.json(todos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "GET todos route failed.", error });
    }

});


// //Delete todo by id
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.todos.deleteTodo(id);
        res.json({ msg: "Todo deleted.", id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "DELETE todo route failed.", error });
    }

});


// //Post
router.post('/', passport.authenticate('jwt'), async (req, res) => {
    const newTodo = req.body;
    delete newTodo.fail;
    try {
        const cannedResponse = await db.todos.insert(newTodo.categoryid, newTodo.task);
        res.status(201).json({ msg: "New todo inserted", id: cannedResponse.insertId });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "code broke", error });
    }

});

// // Post a new todo
// router.post('/', async (req: ReqUser, res) => {
//     const todosDTO = req.body;
//     const userid = req.user.id;
//     try {

//       const { insertId } = await db.todos.insert(todosDTO.task, userid);

//       res.json ({msg: 'Todo inserted successfully.', id: insertId});
    

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: "POST new todo route failed.", error });
//     }

// });



router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editTodo = req.body;
    try {
        const cannedResponse = await db.todos.edit(id, editTodo.categoryid, editTodo.task);
        res.json({msg: "Todo updated successfully", id, cannedResponse});
    }catch (error){
        console.log(error);
        res.status(500).json({msg: "Edit route failed.", error});
    }

});


export default router;