// src/models/router.model.ts
import { Schema, model, Document } from 'mongoose';
import { Router as IRouter } from '../interfaces/IRouter';

const RouterSchema = new Schema<IRouter & Document>({
  name: { type: String, required: true },
  ip: { type: String, required: true },
  port: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['online', 'offline', 'error'], default: 'offline' },
  lastSeen: { type: Date, default: null }
}, { timestamps: true });

export default model<IRouter & Document>('Router', RouterSchema);
