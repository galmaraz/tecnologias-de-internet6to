import { Router } from 'express';
import {
  crearPlan,
  obtenerPlanes,
  actualizarPlan,
  eliminarPlan
} from '../controllers/plan.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Planes
 *   description: Endpoints para la gestión de planes de servicio
 */

/**
 * @swagger
 * /api/planes:
 *   get:
 *     summary: Obtiene todos los planes disponibles
 *     tags: [Planes]
 *     responses:
 *       200:
 *         description: Lista de planes obtenida exitosamente
 *   post:
 *     summary: Crea un nuevo plan
 *     tags: [Planes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Plan Super 100
 *               downloadSpeed:
 *                 type: number
 *                 example: 100
 *               uploadSpeed:
 *                 type: number
 *                 example: 20
 *               price:
 *                 type: number
 *                 example: 120
 *               pppoeProfile:
 *                 type: string
 *                 example: profile_100mb
 *               description:
 *                 type: string
 *                 example: Plan ideal para hogares con múltiples dispositivos
 *     responses:
 *       201:
 *         description: Plan creado exitosamente
 */
router.get('/', obtenerPlanes);
router.post('/', crearPlan);


/**
 * @swagger
 * /api/planes/{id}:
 *   put:
 *     summary: Actualiza un plan existente
 *     tags: [Planes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del plan
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Plan Gold 200
 *               downloadSpeed:
 *                 type: number
 *                 example: 200
 *               uploadSpeed:
 *                 type: number
 *                 example: 30
 *               price:
 *                 type: number
 *                 example: 200
 *               pppoeProfile:
 *                 type: string
 *                 example: profile_200mb
 *               description:
 *                 type: string
 *                 example: Plan para clientes exigentes
 *     responses:
 *       200:
 *         description: Plan actualizado exitosamente
 *   delete:
 *     summary: Elimina un plan por su ID
 *     tags: [Planes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del plan
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plan eliminado exitosamente
 */
router.put('/:id', actualizarPlan);
router.delete('/:id', eliminarPlan);


export default router;
