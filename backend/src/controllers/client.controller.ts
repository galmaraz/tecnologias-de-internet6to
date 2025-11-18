import { Request, Response } from 'express';
import Cliente from '../models/client.model';
import { IClient } from '../interfaces/IClient';

/**
 * 📕 Crear cliente
 */
export const crearCliente = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoCliente = new Cliente(req.body as IClient);
    const clienteGuardado = await nuevoCliente.save();

    res.status(201).json({
      mensaje: '✅ Cliente creado exitosamente',
      data: {
        id: clienteGuardado._id,
        name: clienteGuardado.nombre,
        ci: clienteGuardado.ci,
        telefono: clienteGuardado.telefono,
        email: clienteGuardado.email,
        direccion: clienteGuardado.direccion,
        status: clienteGuardado.estado || 'activo',
        fechaRegistro: clienteGuardado.fechaRegistro,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      mensaje: '❌ Error al crear cliente',
      error: error.message,
    });
  }
};

/**
 * 📗 Obtener todos los clientes o buscar por CI / nombre
 */
export const obtenerClientes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ci, nombre } = req.query;
    const filtro: Partial<Record<keyof IClient, any>> = {};

    if (ci) filtro.ci = ci;
    if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' };

    const clientes = await Cliente.find(filtro, {
      nombre: 1,
      ci: 1,
      telefono: 1,
      email: 1,
      direccion: 1,
      fechaRegistro: 1,
      estado: 1,
    }).lean<IClient[]>();

    res.status(200).json({
      total: clientes.length,
      data: clientes.map(c => ({
        id: c._id,
        name: c.nombre,
        ci: c.ci,
        telefono: c.telefono,
        email: c.email,
        direccion: c.direccion,
        status: c.estado || 'activo',
        fechaRegistro: c.fechaRegistro,
      })),
    });
  } catch (error: any) {
    res.status(500).json({
      mensaje: '❌ Error al obtener clientes',
      error: error.message,
    });
  }
};

/**
 * 📙 Obtener cliente por ID
 */
export const obtenerClientePorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findById(id).lean<IClient>();

    if (!cliente) {
      res.status(404).json({ mensaje: '⚠️ Cliente no encontrado' });
      return;
    }

    res.status(200).json({
      data: {
        id: cliente._id,
        name: cliente.nombre,
        ci: cliente.ci,
        telefono: cliente.telefono,
        email: cliente.email,
        direccion: cliente.direccion,
        status: cliente.estado || 'activo',
        fechaRegistro: cliente.fechaRegistro,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      mensaje: '❌ Error al obtener cliente',
      error: error.message,
    });
  }
};

/**
 * 📕 Actualizar cliente por ID
 */
export const actualizarCliente = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      id,
      req.body as IClient,
      { new: true, runValidators: true }
    ).lean<IClient>();

    if (!clienteActualizado) {
      res.status(404).json({ mensaje: '⚠️ Cliente no encontrado' });
      return;
    }

    res.status(200).json({
      mensaje: '✅ Cliente actualizado correctamente',
      data: {
        id: clienteActualizado._id,
        name: clienteActualizado.nombre,
        ci: clienteActualizado.ci,
        telefono: clienteActualizado.telefono,
        email: clienteActualizado.email,
        direccion: clienteActualizado.direccion,
        status: clienteActualizado.estado || 'activo',
        fechaRegistro: clienteActualizado.fechaRegistro,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      mensaje: '❌ Error al actualizar cliente',
      error: error.message,
    });
  }
};

/**
 * 📓 Eliminar cliente por ID
 */
export const eliminarCliente = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const clienteEliminado = await Cliente.findByIdAndDelete(id).lean<IClient>();

    if (!clienteEliminado) {
      res.status(404).json({ mensaje: '⚠️ Cliente no encontrado' });
      return;
    }

    res.status(200).json({
      mensaje: '🗑️ Cliente eliminado correctamente',
      data: {
        id: clienteEliminado._id,
        name: clienteEliminado.nombre,
        ci: clienteEliminado.ci,
        telefono: clienteEliminado.telefono,
        email: clienteEliminado.email,
        direccion: clienteEliminado.direccion,
        status: clienteEliminado.estado || 'activo',
        fechaRegistro: clienteEliminado.fechaRegistro,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      mensaje: '❌ Error al eliminar cliente',
      error: error.message,
    });
  }
};
