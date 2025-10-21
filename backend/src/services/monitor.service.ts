import Client from '../models/client.model';
import Server from '../models/server.model';
import { IClient } from '../interfaces/IClient';
import { IServer } from '../interfaces/IServer';

export const obtenerEstadoClientes = async (): Promise<IClient[]> => {
  return Client.find({}, { nombre: 1, ci: 1, estado: 1 }).exec();
};

export const obtenerClienteDetalle = async (id: string): Promise<IClient | null> => {
  return Client.findById(id).exec();
};

export const obtenerEstadoServidores = async (): Promise<IServer[]> => {
  return Server.find({}, { nombre: 1, ip: 1, estado: 1, cpu: 1, trafico: 1, uptime: 1 }).exec();
};
