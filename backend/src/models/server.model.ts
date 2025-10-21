import { Schema, model } from 'mongoose';
import { IServer } from '../interfaces/IServer';

const ServerSchema = new Schema<IServer>({
  nombre: { type: String, required: true },
  ip: { type: String, required: true },
  puerto: { type: Number, required: true },
  usuario: { type: String, required: true },
  password: { type: String, required: true },
  estado: { type: String, enum: ['online', 'offline'], default: 'offline' },
  cpu: { type: Number, default: 0 },
  trafico: { type: Number, default: 0 },
}, { timestamps: true });

export default model<IServer>('Server', ServerSchema);
