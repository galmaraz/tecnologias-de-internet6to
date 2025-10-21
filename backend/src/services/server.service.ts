import Server from '../models/server.model';
import { IServer } from '../interfaces/IServer';

// CRUD básico
export const crearServer = async (data: IServer) => {
  const server = new Server(data);
  return server.save();
};

export const obtenerServers = async () => {
  return Server.find();
};

export const actualizarServer = async (id: string, data: Partial<IServer>) => {
  return Server.findByIdAndUpdate(id, data, { new: true });
};

export const eliminarServer = async (id: string) => {
  return Server.findByIdAndDelete(id);
};

// Funciones para integracion con MikroTik (placeholder)
// Aquí puedes usar librerías como 'node-routeros' para la API real
export const provisionarPPPoE = async (serverId: string, usuario: string, password: string) => {
  const server = await Server.findById(serverId);
  if (!server) throw new Error('Servidor no encontrado');
  // Aquí iría la lógica de conexión con CCR y creación del secret PPPoE
  return { message: `Cuenta PPPoE creada en servidor ${server.nombre}` };
};
