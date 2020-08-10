import { Router } from 'express';
import { generateHash } from '../../utils/passwords';
import db from '../../db';
import { createToken } from '../../utils/tokens';
import { stringify } from 'querystring';

const router = Router();

//post auth
router.post('/', async (req, res) => {
    const newUser = req.body
    newUser.password = generateHash(newUser.password);
    try {

        
        const cannedResponse = await db.users.insert(newUser.email, newUser.password, newUser.name, );

        const token = createToken ({ userid: cannedResponse.insertId});
        res.json(token);

    }catch (error) {
        console.log(error);
        res.status(500).json({msg: 'code bad', error});
    }

});

export default router;