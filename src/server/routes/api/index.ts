import { Router } from 'express';
import usersRouter from './users';
import todosRouter from './todos';
import categoriesRouter from './categories';

const router = Router();

router.use('/users', usersRouter);
router.use('/todos', todosRouter);
router.use('/categories', categoriesRouter);


export default router;