import { Request, Response } from 'express';
import Client from '../models/client.model';
import Server from '../models/server.model';
import Contract from '../models/contract.model'; // Asumimos que tienes un modelo de contratos

/**
 * Obtener estadísticas generales del dashboard (DashboardStats)
 */
export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // Clientes
    const totalClients = await Client.countDocuments();
    const activeClients = await Client.countDocuments({ estado: 'activo' });
    const suspendedClients = await Client.countDocuments({ estado: 'suspendido' });
    const inactiveClients = await Client.countDocuments({ estado: 'inactivo' });

    // Routers
    const totalRouters = await Server.countDocuments();
    const onlineRouters = await Server.countDocuments({ estado: 'online' });
    const offlineRouters = await Server.countDocuments({ estado: 'offline' });

    // Contratos
    const totalContracts = await Contract.countDocuments();
    const activeContracts = await Contract.countDocuments({ estado: 'active' });

    // Ingresos mensuales (sumatoria de monthlyFee de contratos activos)
    const contractsActive = await Contract.find({ estado: 'active' }, { monthlyFee: 1 });
    const monthlyRevenue = contractsActive.reduce((sum, c) => sum + (c.monthlyFee || 0), 0);

    // Respuesta compatible con frontend
    res.status(200).json({
      totalClients,
      activeClients,
      suspendedClients,
      inactiveClients,
      totalRouters,
      onlineRouters,
      offlineRouters,
      monthlyRevenue,
      totalContracts,
      activeContracts,
    });
  } catch (error: any) {
    console.error('Error obteniendo estadísticas del dashboard:', error);
    res.status(500).json({ message: 'Error obteniendo estadísticas del dashboard', error: error.message });
  }
};
