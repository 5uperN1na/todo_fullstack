import { Router } from 'express';
import registerRouter from './register';
import loginRouter from './login';
import tokenRouter from './token';

const router = Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/token', tokenRouter);

export default router;