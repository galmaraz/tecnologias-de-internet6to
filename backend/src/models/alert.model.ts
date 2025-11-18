import { Schema, model } from 'mongoose';
import { Alert } from '../interfaces/IAlert';

const alertSchema = new Schema<Alert>({
  type: { type: String, enum: ['error', 'warning', 'info'], required: true },
  message: { type: String, required: true },
  routerName: { type: String, default: null },
  timestamp: { type: Date, required: true, default: Date.now },
  read: { type: Boolean, default: false },
});

const AlertModel = model<Alert>('Alert', alertSchema);
export default AlertModel;
