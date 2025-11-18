import { ActiveConnection } from "../interfaces/activeConnection";
import { ActiveConnectionModel } from "../models/activeConnection.model";

export class ConnectionsService {
  async getActiveConnections(): Promise<ActiveConnection[]> {
    const connections = await ActiveConnectionModel.getAll();

    // Simulación de tiempo de inicio de sesión (solo para calcular connectedTime)
    const startTimes: Record<string, Date> = {
      "1": new Date(new Date().getTime() - 15 * 60 * 1000 - 32 * 1000), // 15:32 minutos
      "2": new Date(new Date().getTime() - 5 * 60 * 1000 - 10 * 1000),  // 5:10 minutos
    };

    // Calculamos connectedTime dinámico sin agregar campos extra
    return connections.map(conn => {
      const startTime = startTimes[conn.id];
      const connectedMs = startTime ? new Date().getTime() - startTime.getTime() : 0; // si no existe, 0

      const hours = Math.floor(connectedMs / (1000 * 60 * 60));
      const minutes = Math.floor((connectedMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((connectedMs % (1000 * 60)) / 1000);

      return {
        ...conn,
        connectedTime: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
      };
    });

  }
}
