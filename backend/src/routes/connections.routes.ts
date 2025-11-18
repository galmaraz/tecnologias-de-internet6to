import { Router } from 'express';
import { ConnectionsController } from '../controllers/connections.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Conexiones
 *   description: Endpoints para el monitoreo de conexiones PPPoE
 */

/**
 * @swagger
 * /api/connections/active:
 *   get:
 *     summary: Obtiene la lista de todas las conexiones activas
 *     tags: [Conexiones]
 *     responses:
 *       200:
 *         description: Lista de conexiones activas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   clientName:
 *                     type: string
 *                     example: "Galia"
 *                   pppoeUsername:
 *                     type: string
 *                     example: "galia123"
 *                   ipAddress:
 *                     type: string
 *                     example: "192.168.1.10"
 *                   routerName:
 *                     type: string
 *                     example: "Router1"
 *                   connectedTime:
 *                     type: string
 *                     example: "00:15:32"
 *                   rxBytes:
 *                     type: number
 *                     example: 1024000
 *                   txBytes:
 *                     type: number
 *                     example: 2048000
 */
router.get('/active', ConnectionsController.getActiveConnections);

export default router;
