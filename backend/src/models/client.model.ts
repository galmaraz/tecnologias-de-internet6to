import { Schema, model, Document } from 'mongoose';
import { IClient } from '../interfaces/IClient';

const ClienteSchema = new Schema<IClient & Document>({
  nombre: { type: String, required: true },
  ci: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  direccion: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  estado: { type: String, enum: ['activo', 'inactivo', 'suspendido'], default: 'activo' },
});

export default model<IClient & Document>('Cliente', ClienteSchema);
