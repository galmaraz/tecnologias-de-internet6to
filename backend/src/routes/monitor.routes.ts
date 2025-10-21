import { Router } from 'express';
import { obtenerIndicadoresDashboard } from '../controllers/monitor.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Indicadores principales del sistema (KPIs)
 */

/**
 * @swagger
 * /api/dashboard/indicadores:
 *   get:
 *     summary: Obtiene los KPIs principales del sistema
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Indicadores obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 clientesActivos:
 *                   type: number
 *                   example: 120
 *                 clientesInactivos:
 *                   type: number
 *                   example: 15
 *                 routersOnline:
 *                   type: number
 *                   example: 8
 *                 routersOffline:
 *                   type: number
 *                   example: 2
 *                 cpuUsage:
 *                   type: number
 *                   example: 65.4
 *                 bandwidthUsage:
 *                   type: number
 *                   example: 230
 */
router.get('/indicadores', obtenerIndicadoresDashboard);

export default router;
