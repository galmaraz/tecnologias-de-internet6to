import { Router } from 'express';
import { getDashboardStats } from '../controllers/monitor.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Endpoints del dashboard
 */

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Obtiene estadísticas generales del dashboard
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Estadísticas obtenidas exitosamente
 */
router.get('/stats', getDashboardStats);

export default router;
