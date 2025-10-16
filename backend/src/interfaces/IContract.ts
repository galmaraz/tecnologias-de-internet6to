import { Document, Types } from 'mongoose';

export interface IContract extends Document {
  clienteId: Types.ObjectId;      // Cliente asociado
  planId: Types.ObjectId;         // Plan asignado
  servidor: string;               // Servidor (CCR)
  usuarioPPPoE: string;           // Usuario generado automáticamente
  contrasenaPPPoE: string;       // Contraseña generada automáticamente
  fechaInicio: Date;
  fechaFin?: Date | null;        // Puede ser indefinido
  estado: 'activo' | 'suspendido' | 'finalizado';
  createdAt: Date;
  updatedAt: Date;
}
