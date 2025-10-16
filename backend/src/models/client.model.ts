import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  ci: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  direccion: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
});

export default model('Cliente', ClienteSchema);
