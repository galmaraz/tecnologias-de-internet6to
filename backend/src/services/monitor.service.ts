import Client from '../models/client.model';
import Server from '../models/server.model';
import Contract from '../models/contract.model';
import { DashboardStats } from '../interfaces/IdashboardStats';

export class DashboardStatsService {
  async getDashboardStats(): Promise<DashboardStats> {
    const totalClients = await Client.countDocuments();
    const activeClients = await Client.countDocuments({ estado: 'activo' });
    const suspendedClients = await Client.countDocuments({ estado: 'suspendido' });
    const inactiveClients = await Client.countDocuments({ estado: 'inactivo' });

    const totalRouters = await Server.countDocuments();
    const onlineRouters = await Server.countDocuments({ estado: 'online' });
    const offlineRouters = await Server.countDocuments({ estado: 'offline' });

    const totalContracts = await Contract.countDocuments();
    const activeContracts = await Contract.countDocuments({ estado: 'active' });

    const contractsActive = await Contract.find({ estado: 'active' }, { monthlyFee: 1 });
    const monthlyRevenue = contractsActive.reduce((sum, c) => sum + (c.monthlyFee || 0), 0);

    return {
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
    };
  }
}
