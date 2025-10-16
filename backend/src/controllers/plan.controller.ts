// src/controllers/plan.controller.ts
import { Request, Response } from 'express';
import Plan from '../models/plan.model';

// Crear plan
export const crearPlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Obtener todos los planes
export const obtenerPlanes = async (req: Request, res: Response) => {
  try {
    const planes = await Plan.find();
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Actualizar plan
export const actualizarPlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!plan) return res.status(404).json({ message: 'Plan no encontrado' });
    res.json(plan);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Eliminar plan
export const eliminarPlan = async (req: Request, res: Response) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan no encontrado' });

    // ❗ Validación placeholder: no eliminar si está en uso
    const estaEnUso = false; // Aquí se debería verificar contra clientes o perfiles MikroTik
    if (estaEnUso) {
      return res.status(400).json({ message: 'No se puede eliminar, el plan está en uso' });
    }

    await plan.deleteOne();
    res.json({ message: 'Plan eliminado' });
  } catch (error) {
    res.status(400).json({ error });
  }
};
