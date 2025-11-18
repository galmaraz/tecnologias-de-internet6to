// src/controllers/router.controller.ts
import { Request, Response } from 'express';
import * as RouterService from '../services/router.service';

export const crearRouter = async (req: Request, res: Response) => {
  try {
    const router = await RouterService.crearRouter(req.body);
    res.status(201).json(router);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creando router', error });
  }
};

export const obtenerRouters = async (req: Request, res: Response) => {
  const routers = await RouterService.obtenerRouters();
  res.json(routers);
};

export const obtenerRouter = async (req: Request, res: Response) => {
  const id = req.params.id;
  // Check if ID exists before calling the service
  if (!id) return res.status(400).json({ message: 'ID es requerido para obtener router' });

  const router = await RouterService.obtenerRouter(id);
  if (!router) return res.status(404).json({ message: 'Router no encontrado' });
  res.json(router);
};

export const actualizarRouter = async (req: Request, res: Response) => {
  const id = req.params.id;
  // Check if ID exists before calling the service
  if (!id) return res.status(400).json({ message: 'ID es requerido para actualizar router' });
  
  const router = await RouterService.actualizarRouter(id, req.body);
  if (!router) return res.status(404).json({ message: 'Router no encontrado' });
  res.json(router);
};

export const eliminarRouter = async (req: Request, res: Response) => {
  const id = req.params.id;
  // Check if ID exists before calling the service
  if (!id) return res.status(400).json({ message: 'ID es requerido para eliminar router' });

  const router = await RouterService.eliminarRouter(id);
  if (!router) return res.status(404).json({ message: 'Router no encontrado' });
  res.json(router);
};