import { Router } from 'express';
import {
  crearContrato,
  obtenerContratos,
  obtenerContrato,
  actualizarContrato,
  eliminarContrato
} from '../controllers/contract.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Contratos
 *   description: Endpoints para la gestión de contratos
 */

/**
 * @swagger
 * /api/contratos:
 *   get:
 *     summary: Obtiene la lista de todos los contratos
 *     tags: [Contratos]
 *     responses:
 *       200:
 *         description: Lista de contratos obtenida exitosamente
 *   post:
 *     summary: Crea un nuevo contrato
 *     tags: [Contratos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *                 example: 652a7dbe9a6a3c1234567890
 *               planId:
 *                 type: string
 *                 example: 652a7dbb9a6a3c0987654321
 *               routerId:
 *                 type: string
 *                 example: 652a7dbb9a6a3c0987654322
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *                 example: 2025-10-21
 *               fechaFin:
 *                 type: string
 *                 format: date
 *                 example: 2026-10-21
 *               monthlyFee:
 *                 type: number
 *                 example: 150
 *               usuarioPPPoE:
 *                 type: string
 *                 example: userabc123
 *               contrasenaPPPoE:
 *                 type: string
 *                 example: 1a2b3c4d
 *               estado:
 *                 type: string
 *                 enum: [active, suspended, cancelled]
 *                 example: active
 *     responses:
 *       201:
 *         description: Contrato creado exitosamente
 */
router.get('/', obtenerContratos);
router.post('/', crearContrato);

/**
 * @swagger
 * /api/contratos/{id}:
 *   get:
 *     summary: Obtiene un contrato por su ID
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contrato
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato obtenido exitosamente
 *   put:
 *     summary: Actualiza un contrato existente
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contrato
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               planId:
 *                 type: string
 *                 example: 652a7dbb9a6a3c0987654321
 *               routerId:
 *                 type: string
 *                 example: 652a7dbb9a6a3c0987654322
 *               fechaFin:
 *                 type: string
 *                 format: date
 *                 example: 2026-12-31
 *               monthlyFee:
 *                 type: number
 *                 example: 150
 *               usuarioPPPoE:
 *                 type: string
 *                 example: userxyz789
 *               contrasenaPPPoE:
 *                 type: string
 *                 example: 9f8e7d6c
 *               estado:
 *                 type: string
 *                 enum: [active, suspended, cancelled]
 *                 example: suspended
 *     responses:
 *       200:
 *         description: Contrato actualizado exitosamente
 *   delete:
 *     summary: Elimina un contrato por su ID
 *     tags: [Contratos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contrato
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato eliminado exitosamente
 */
router.get('/:id', obtenerContrato);
router.put('/:id', actualizarContrato);
router.delete('/:id', eliminarContrato);

export default router;
