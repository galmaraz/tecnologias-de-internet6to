// src/models/contract.model.ts
import mongoose, { Schema, Document, Model } from 'mongoose';
import { IContract } from '../interfaces/IContract';
import crypto from 'crypto';

// Extendemos Document para incluir IContract y campos extra (PPPoE)
export interface IContractDocument extends IContract, Document {
  usuarioPPPoE: string;
  contrasenaPPPoE: string;
}

// Creamos el Schema SIN tipar con IContract
const ContractSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  planId: { type: Schema.Types.ObjectId, ref: 'Plan', required: true },
  routerId: { type: Schema.Types.ObjectId, ref: 'Router', required: false },

  usuarioPPPoE: { type: String, required: true, unique: true },
  contrasenaPPPoE: { type: String, required: true },

  estado: { type: String, enum: ['active', 'suspended', 'cancelled'], default: 'active' },

  fechaInicio: { type: Date, default: Date.now },
  fechaFin: { type: Date, default: null },

  monthlyFee: { type: Number, required: true }
}, { timestamps: true });

// Middleware para generar PPPoE automáticamente
ContractSchema.pre<IContractDocument>('validate', function(next) {
  if (!this.usuarioPPPoE) {
    this.usuarioPPPoE = 'user' + crypto.randomBytes(3).toString('hex');
  }
  if (!this.contrasenaPPPoE) {
    this.contrasenaPPPoE = crypto.randomBytes(4).toString('hex');
  }
  next();
});

// Exportamos el modelo tipado
const Contract: Model<IContractDocument> = mongoose.model<IContractDocument>('Contract', ContractSchema);
export default Contract;
