// src/interfaces/IContract.ts
import { Types } from 'mongoose';

export interface IContract {
  clientId: Types.ObjectId;
  planId: Types.ObjectId;
  routerId?: Types.ObjectId;
  usuarioPPPoE?: string;
  contrasenaPPPoE?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  estado?: string;
  monthlyFee?: number;

  // Para mapear referencias pobladas al frontend
  client?: any;
  plan?: any;
  router?: any;
}
