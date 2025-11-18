import { Router } from "express";
import { getRecentAlerts, createAlert } from "../controllers/alert.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard Alerts
 *   description: Alertas recientes del dashboard
 */

/**
 * @swagger
 * /api/dashboard/alerts:
 *   get:
 *     summary: Obtiene las últimas alertas no leídas del sistema
 *     tags: [Dashboard Alerts]
 *     responses:
 *       200:
 *         description: Alertas obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   type:
 *                     type: string
 *                     enum: [error, warning, info]
 *                   message:
 *                     type: string
 *                   routerName:
 *                     type: string
 *                     nullable: true
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                   read:
 *                     type: boolean
 * 
 *   post:
 *     summary: Crea una nueva alerta en el sistema
 *     tags: [Dashboard Alerts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [error, warning, info]
 *                 example: error
 *               message:
 *                 type: string
 *                 example: "Router offline"
 *               routerName:
 *                 type: string
 *                 nullable: true
 *                 example: "Router1"
 *     responses:
 *       201:
 *         description: Alerta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 type:
 *                   type: string
 *                 message:
 *                   type: string
 *                 routerName:
 *                   type: string
 *                   nullable: true
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 read:
 *                   type: boolean
 */

router.get("/alerts", getRecentAlerts);
router.post("/alerts", createAlert);

export default router;
