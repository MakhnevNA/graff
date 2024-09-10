import { Router } from 'express';
import { moduleRoutes } from './constants';

const router = Router();

moduleRoutes.forEach((route) => router.use(route));

export default router;
