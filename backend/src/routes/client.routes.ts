import { Router } from 'express';
import {
  crearCliente,
  obtenerClientes,
  actualizarCliente,
  eliminarCliente
} from '../controllers/client.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para administrar clientes
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene la lista de todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 68f155fb97300f3e4d276841
 *                   nombre:
 *                     type: string
 *                     example: Juan Pérez
 *                   ci:
 *                     type: string
 *                     example: 12345678
 *                   telefono:
 *                     type: string
 *                     example: 78945612
 *                   email:
 *                     type: string
 *                     example: juan@mail.com
 *                   direccion:
 *                     type: string
 *                     example: Calle Falsa 123
 *                   fechaRegistro:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-10-16T20:30:51.188Z
 *                   estado:
 *                     type: string
 *                     enum: [activo, inactivo]
 *                     example: activo
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Pérez
 *               ci:
 *                 type: string
 *                 example: 12345678
 *               telefono:
 *                 type: string
 *                 example: 78945612
 *               email:
 *                 type: string
 *                 example: juan@mail.com
 *               direccion:
 *                 type: string
 *                 example: Calle Falsa 123
 *               estado:
 *                 type: string
 *                 enum: [activo, inactivo]
 *                 example: activo
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualiza un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente
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
 *                 example: María López
 *               ci:
 *                 type: string
 *                 example: 87654321
 *               telefono:
 *                 type: string
 *                 example: 12345678
 *               email:
 *                 type: string
 *                 example: maria@example.com
 *               direccion:
 *                 type: string
 *                 example: Calle Real 456
 *               estado:
 *                 type: string
 *                 enum: [activo, inactivo]
 *                 example: inactivo
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *   delete:
 *     summary: Elimina un cliente por su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 */

router.get('/', obtenerClientes);
router.post('/', crearCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

export default router;
