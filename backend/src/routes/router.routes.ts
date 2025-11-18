// src/routes/router.routes.ts
import { Router } from 'express';
import {
  crearRouter,
  obtenerRouters,
  obtenerRouter,
  actualizarRouter,
  eliminarRouter
} from '../controllers/router.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Routers
 *   description: Endpoints para la gestión de routers
 */

/**
 * @swagger
 * /api/routers:
 *   get:
 *     summary: Obtiene la lista de todos los routers
 *     tags: [Routers]
 *     responses:
 *       200:
 *         description: Lista de routers obtenida exitosamente
 *   post:
 *     summary: Crea un nuevo router
 *     tags: [Routers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Router Central
 *               ip:
 *                 type: string
 *                 example: 192.168.1.1
 *               port:
 *                 type: number
 *                 example: 8080
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin123
 *               location:
 *                 type: string
 *                 example: Oficina Principal
 *               status:
 *                 type: string
 *                 enum: [online, offline, error]
 *                 example: online
 *     responses:
 *       201:
 *         description: Router creado exitosamente
 */
router.get('/', obtenerRouters);
router.post('/', crearRouter);

/**
 * @swagger
 * /api/routers/{id}:
 *   get:
 *     summary: Obtiene un router por su ID
 *     tags: [Routers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del router
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Router obtenido exitosamente
 *   put:
 *     summary: Actualiza un router existente
 *     tags: [Routers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del router
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
 *                 example: Router Actualizado
 *               ip:
 *                 type: string
 *                 example: 192.168.1.2
 *               port:
 *                 type: number
 *                 example: 8081
 *               username:
 *                 type: string
 *                 example: admin2
 *               password:
 *                 type: string
 *                 example: pass456
 *               location:
 *                 type: string
 *                 example: Sucursal
 *               status:
 *                 type: string
 *                 enum: [online, offline, error]
 *                 example: offline
 *     responses:
 *       200:
 *         description: Router actualizado exitosamente
 *   delete:
 *     summary: Elimina un router por su ID
 *     tags: [Routers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del router
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Router eliminado exitosamente
 */
router.get('/:id', obtenerRouter);
router.put('/:id', actualizarRouter);
router.delete('/:id', eliminarRouter);

export default router;
