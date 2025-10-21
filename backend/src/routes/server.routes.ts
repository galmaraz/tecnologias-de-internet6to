import { Router } from 'express';
import {
  crearServer,
  obtenerServers,
  actualizarServer,
  eliminarServer,
  provisionarPPPoE
} from '../controllers/server.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Servidores
 *   description: Endpoints para la gestión de servidores y configuración PPPoE
 */

/**
 * @swagger
 * /api/servers:
 *   get:
 *     summary: Obtiene la lista de servidores registrados
 *     tags: [Servidores]
 *     responses:
 *       200:
 *         description: Lista de servidores obtenida exitosamente
 *   post:
 *     summary: Crea un nuevo servidor
 *     tags: [Servidores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Servidor Central
 *               ip:
 *                 type: string
 *                 example: 192.168.1.10
 *               ubicacion:
 *                 type: string
 *                 example: Cochabamba
 *     responses:
 *       201:
 *         description: Servidor creado exitosamente
 */
router.get('/', obtenerServers);
router.post('/', crearServer);

/**
 * @swagger
 * /api/servers/{id}:
 *   put:
 *     summary: Actualiza un servidor existente
 *     tags: [Servidores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servidor
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Servidor Norte
 *               ip:
 *                 type: string
 *                 example: 192.168.1.15
 *               ubicacion:
 *                 type: string
 *                 example: La Paz
 *     responses:
 *       200:
 *         description: Servidor actualizado exitosamente
 *   delete:
 *     summary: Elimina un servidor por su ID
 *     tags: [Servidores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servidor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Servidor eliminado exitosamente
 */
router.put('/:id', actualizarServer);
router.delete('/:id', eliminarServer);

/**
 * @swagger
 * /api/servers/provisionar:
 *   post:
 *     summary: Provisiona un nuevo usuario PPPoE en el servidor
 *     tags: [Servidores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *                 example: Juan Pérez
 *               usuario:
 *                 type: string
 *                 example: juanperez123
 *               password:
 *                 type: string
 *                 example: 123456
 *               plan:
 *                 type: string
 *                 example: Plan Premium
 *     responses:
 *       201:
 *         description: Usuario PPPoE provisionado exitosamente
 */
router.post('/provisionar', provisionarPPPoE);

export default router;
