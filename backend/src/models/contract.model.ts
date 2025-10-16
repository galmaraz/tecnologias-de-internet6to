import mongoose, { Schema } from 'mongoose';
import { IContract } from '../interfaces/IContract';
import crypto from 'crypto';

const ContractSchema: Schema<IContract> = new Schema({
  clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  planId: { type: Schema.Types.ObjectId, ref: 'Plan', required: true },
  servidor: { type: String, required: true },
  usuarioPPPoE: { type: String, required: true, unique: true },
  contrasenaPPPoE: { type: String, required: true },
  fechaInicio: { type: Date, default: Date.now },
  fechaFin: { type: Date, default: null },
  estado: { type: String, enum: ['activo', 'suspendido', 'finalizado'], default: 'activo' },
}, { timestamps: true });

// Middleware para generar usuario y contraseña antes de guardar
ContractSchema.pre('validate', function(next) {
  if (!this.usuarioPPPoE) {
    this.usuarioPPPoE = 'user' + crypto.randomBytes(3).toString('hex');
  }
  if (!this.contrasenaPPPoE) {
    this.contrasenaPPPoE = crypto.randomBytes(4).toString('hex');
  }
  next();
});

export default mongoose.model<IContract>('Contract', ContractSchema);
