import { Request, Response } from 'express';
import Cliente from '../models/client.model';

// Crear cliente
export const crearCliente = async (req: Request, res: Response) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear cliente', error });
  }
};

// Obtener todos los clientes o filtrar por CI/nombre
export const obtenerClientes = async (req: Request, res: Response) => {
  try {
    const { ci, nombre } = req.query;
    const filtro: any = {};
    if (ci) filtro.ci = ci;
    if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' };

    const clientes = await Cliente.find(filtro);
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes', error });
  }
};

// Actualizar cliente por ID
export const actualizarCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar cliente', error });
  }
};

// Eliminar cliente por ID
export const eliminarCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar cliente', error });
  }
};

