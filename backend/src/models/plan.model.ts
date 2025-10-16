// src/models/plan.model.ts
import { Schema, model } from 'mongoose';

interface IPlan {
  nombre: string;          // Nombre del plan
  velocidad: string;       // Ej: "100 Mbps"
  descripcion: string;     // Detalles del plan
  estado: boolean;         // Activo / Inactivo
  profileMikrotik: string; // Nombre del profile en MikroTik
}

const planSchema = new Schema<IPlan>({
  nombre: { type: String, required: true, unique: true },
  velocidad: { type: String, required: true },
  descripcion: { type: String },
  estado: { type: Boolean, default: true },
  profileMikrotik: { type: String, required: true }
}, {
  timestamps: true
});

export default model<IPlan>('Plan', planSchema);
