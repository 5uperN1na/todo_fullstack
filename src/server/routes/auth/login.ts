import { Router } from 'express';
import * as passport from 'passport';
 import { createToken } from '../../utils/tokens';
 import { ReqUser } from '../../utils/types';
import { isString } from 'util';

const router = Router();

//post /auth/login
router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
  
    try {

        const token = createToken ({ userid: req.user.id});
        res.json(token);
        // res.json({msg: 'logged', ...req.user});

    }catch (error) {
        console.log(error);
        res.status(500).json({msg: 'code bad', error});
    }

});

export default router;