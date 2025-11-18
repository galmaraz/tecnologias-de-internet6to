import { ActiveConnection } from "../interfaces/activeConnection";

export const ActiveConnectionModel = {
  async getAll(): Promise<ActiveConnection[]> {
    // Simulación: datos crudos, puede venir de DB o API MikroTik
    return [
      {
        id: "1",
        clientName: "Galia",
        pppoeUsername: "galia123",
        ipAddress: "192.168.1.10",
        routerName: "Router1",
        connectedTime: "00:00:00", // se calcula después en el Service
        rxBytes: 1024000,
        txBytes: 2048000,
      },
      {
        id: "1",
        clientName: "Galia",
        pppoeUsername: "galia123",
        ipAddress: "192.168.1.10",
        routerName: "Router1",
        connectedTime: "00:00:00", // se calcula después en el Service
        rxBytes: 1024000,
        txBytes: 2048000,
      },
      {
        id: "1",
        clientName: "Galia",
        pppoeUsername: "galia123",
        ipAddress: "192.168.1.10",
        routerName: "Router1",
        connectedTime: "00:00:00", // se calcula después en el Service
        rxBytes: 1024000,
        txBytes: 2048000,
      },
    ];
  }
};
