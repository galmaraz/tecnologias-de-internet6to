// src/routes/plan.routes.ts
import { Router } from 'express';
import { crearPlan, obtenerPlanes, actualizarPlan, eliminarPlan } from '../controllers/plan.controller';

const router = Router();

router.post('/', crearPlan);
router.get('/', obtenerPlanes);
router.put('/:id', actualizarPlan);
router.delete('/:id', eliminarPlan);

export default router;
