import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = express.Router();


// // //Testing example
// router.get('/', (req, res, next) => {
//     res.json('TESTING!!!');
// });

// //GET all users
// router.get('/', async (req, res)=> {
//     try {
//         const users = await db.users.all();
//         res.json(users);
//     } catch (error){
//         console.log(error);
//         res.status(500).json({msg: 'GET all users route failed.', error});
//     }
// });


//GET single or all users
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [todo] = await db.users.one(id);
            res.json(todo);

        } else {
            const todos = await db.users.all();
            res.json(todos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "GET users route failed.", error });
    }

});



// Post a new user
router.post('/', async (req, res) => {
    const userDTO = req.body;
    try {

      const { insertId } = await db.users.insert(userDTO.email, userDTO.password, userDTO.name );

      res.json ({msg: 'User registered successfully.', id: insertId});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "POST new user route failed.", error });
    }

});

// //Delete user by id
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.users.deleteUser(id);
        res.json({ msg: "Todo deleted.", id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "DELETE user route failed.", error });
    }

});


router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editUser = req.body;
    try {
        const cannedResponse = await db.users.edit(id, editUser.email, editUser.name);
        res.json({msg: "User updated successfully", id, cannedResponse});
    }catch (error){
        console.log(error);
        res.status(500).json({msg: "Edit user route failed.", error});
    }

});









export default router;