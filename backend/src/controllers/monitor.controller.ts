import { Request, Response } from 'express';
import Cliente from '../models/client.model';
import Server from '../models/server.model';

/**
 * 📊 Obtener indicadores principales (KPIs) del sistema
 */
export const obtenerIndicadoresDashboard = async (req: Request, res: Response): Promise<void> => {
  try {
    // Contar clientes activos e inactivos
    const clientesActivos = await Cliente.countDocuments({ estado: 'activo' });
    const clientesInactivos = await Cliente.countDocuments({ estado: 'inactivo' });

    // Contar routers online/offline
    const routersOnline = await Server.countDocuments({ estado: 'online' });
    const routersOffline = await Server.countDocuments({ estado: 'offline' });

    // Calcular promedios de CPU y ancho de banda
    const servidores = await Server.find({}, { cpu: 1, trafico: 1 });
    const cpuUsage =
      servidores.length > 0
        ? servidores.reduce((acc, s) => acc + (s.cpu || 0), 0) / servidores.length
        : 0;
    const bandwidthUsage =
      servidores.length > 0
        ? servidores.reduce((acc, s) => acc + (s.trafico || 0), 0) / servidores.length
        : 0;

    // Respuesta final
    res.status(200).json({
      clientesActivos,
      clientesInactivos,
      routersOnline,
      routersOffline,
      cpuUsage: Number(cpuUsage.toFixed(2)),
      bandwidthUsage: Number(bandwidthUsage.toFixed(2)),
    });
  } catch (error: any) {
    res.status(500).json({
      mensaje: '❌ Error al obtener indicadores del dashboard',
      error: error.message,
    });
  }
};
