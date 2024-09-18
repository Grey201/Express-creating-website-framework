
import { Router } from 'express';
import healthRouter from './routes/health/routes.js';
import userRouter from './routes/users/routes.js';

const router = new Router();

router.use('/api/health', healthRouter);
router.use('/user', userRouter);

export default router;