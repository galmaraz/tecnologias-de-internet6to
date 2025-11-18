import { Request, Response } from 'express';
import * as alertService from '../services/alert.service';

/**
 * Obtener últimas alertas no leídas
 */
export const getRecentAlerts = async (req: Request, res: Response) => {
  try {
    const alerts = await alertService.getUnreadAlerts();
    res.status(200).json(alerts);
  } catch (error: any) {
    res.status(500).json({ mensaje: 'Error al obtener alertas', error: error.message });
  }
};

/**
 * Crear nueva alerta
 */
export const createAlert = async (req: Request, res: Response) => {
  try {
    const { type, message, routerName } = req.body;
    const alert = await alertService.createAlert({ type, message, routerName });
    res.status(201).json(alert);
  } catch (error: any) {
    res.status(500).json({ mensaje: 'Error al crear alerta', error: error.message });
  }
};
