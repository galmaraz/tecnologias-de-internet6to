import { Request, Response } from 'express';
import * as ServerService from '../services/server.service';
import { IServer } from '../interfaces/IServer';

// Crear un servidor
export const crearServer = async (req: Request<{}, {}, IServer>, res: Response) => {
  const { nombre, ip, puerto, usuario, password, estado } = req.body;

  if (!nombre || !ip || !puerto || !usuario || !password) {
    return res.status(400).json({ message: 'Faltan datos obligatorios para crear el servidor' });
  }

  try {
    const server = await ServerService.crearServer(req.body);
    res.status(201).json(server);
  } catch (error) {
    res.status(500).json({ message: 'Error creando servidor', error });
  }
};

// Obtener todos los servidores
export const obtenerServers = async (req: Request, res: Response) => {
  try {
    const servers = await ServerService.obtenerServers();
    res.json(servers);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo servidores', error });
  }
};

// Actualizar un servidor
export const actualizarServer = async (req: Request<{ id: string }, {}, IServer>, res: Response) => {
  try {
    const server = await ServerService.actualizarServer(req.params.id, req.body);
    res.json(server);
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando servidor', error });
  }
};

// Eliminar un servidor
export const eliminarServer = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const server = await ServerService.eliminarServer(req.params.id);
    res.json({ message: 'Servidor eliminado', server });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando servidor', error });
  }
};

// Provisionar PPPoE
export const provisionarPPPoE = async (req: Request<{}, {}, { serverId: string; usuario: string; password: string }>, res: Response) => {
  const { serverId, usuario, password } = req.body;

  if (!serverId || !usuario || !password) {
    return res.status(400).json({ message: 'Faltan datos obligatorios para provisionar PPPoE' });
  }

  try {
    const result = await ServerService.provisionarPPPoE(serverId, usuario, password);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error provisionando PPPoE', error });
  }
};
