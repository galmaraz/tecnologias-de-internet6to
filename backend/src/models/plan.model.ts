// src/models/plan.model.ts
import { Schema, model } from 'mongoose';
import { IPlan } from '../interfaces/IPlan';


const planSchema = new Schema<IPlan>({
  name: { type: String, required: true, unique: true },
  downloadSpeed: { type: Number, required: true },
  uploadSpeed: { type: Number, required: true },
  price: { type: Number, required: true },
  pppoeProfile: { type: String, required: true },
  description: { type: String }
}, {
  timestamps: true   //  agrega createdAt y updatedAt automáticamente
});

export default model<IPlan>('Plan', planSchema);
