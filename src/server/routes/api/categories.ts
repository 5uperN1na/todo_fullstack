import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import { ReqUser } from '../../utils/types';

const router = express.Router();

// //Testing example
// router.get('/', (req, res, next) => {
//     res.json('TESTING!!!');
// });


//GET single or all categories
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [category] = await db.categories.one(id);
            res.json(category);

        } else {
            const categories = await db.categories.all();
            res.json(categories);
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
        await db.categories.deleteCategory(id);
        res.json({ msg: "Todo deleted.", id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "DELETE todo route failed.", error });
    }

});


// //Post
router.post('/', async (req, res) => {
    const newCategory = req.body;
    delete newCategory.fail;
    try {
        const cannedResponse = await db.todos.insert(newCategory.id, newCategory.name);
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
    const editCategory = req.body;
    try {
        const cannedResponse = await db.categories.edit(id, editCategory.name);
        res.json({msg: "Category updated successfully", id, cannedResponse});
    }catch (error){
        console.log(error);
        res.status(500).json({msg: "Edit route failed.", error});
    }

});


export default router;