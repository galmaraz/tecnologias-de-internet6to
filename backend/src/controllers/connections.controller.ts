import { Request, Response } from "express";
import { ConnectionsService } from "../services/connections.service";

const service = new ConnectionsService();

export class ConnectionsController {
  static async getActiveConnections(req: Request, res: Response) {
    try {
      const data = await service.getActiveConnections();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error obteniendo conexiones activas" });
    }
  }
}
