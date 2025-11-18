// src/services/contract.service.ts
import mongoose, { Types } from 'mongoose';
import Contract from '../models/contract.model';
import { IContract } from '../interfaces/IContract';

/**
 * Función para mapear un contrato Mongoose al objeto que se enviará al frontend
 */
const mapContrato = (contrato: IContract & { _id: Types.ObjectId; __v: number }) => {
  const obj: IContract & { id: string } = { ...contrato } as any;

  obj.id = contrato._id.toString();

  if (obj.clientId) obj.client = obj.clientId;
  if (obj.planId) obj.plan = obj.planId;
  if (obj.routerId) obj.router = obj.routerId;

  // Borrar campos internos de Mongoose
  delete (obj as any)._id;
  delete (obj as any).__v;
  delete (obj as any).clientId;
  delete (obj as any).planId;
  delete (obj as any).routerId;

  return obj;
};

/**
 * Crear contrato
 */
export const crearContrato = async (data: Partial<IContract>) => {
  if (!data.clientId || !data.planId) {
    throw new Error('clientId y planId son requeridos');
  }

  const contractData = {
    ...data,
    clientId: new mongoose.Types.ObjectId(data.clientId),
    planId: new mongoose.Types.ObjectId(data.planId),
    routerId: data.routerId ? new mongoose.Types.ObjectId(data.routerId) : undefined,
    fechaInicio: data.fechaInicio ? new Date(data.fechaInicio) : new Date(),
    fechaFin: data.fechaFin ? new Date(data.fechaFin) : null
  };

  const contrato = await Contract.create(contractData);
  await contrato.populate(['clientId', 'planId', 'routerId']);

  return mapContrato(contrato.toObject() as IContract & { _id: Types.ObjectId; __v: number });
};

/**
 * Obtener todos los contratos
 */
export const obtenerContratos = async () => {
  const contratos = await Contract.find().populate(['clientId', 'planId', 'routerId']);
  return contratos.map((c) =>
    mapContrato(c.toObject() as IContract & { _id: Types.ObjectId; __v: number })
  );
};

/**
 * Obtener contrato por ID
 */
export const obtenerContrato = async (id: string) => {
  const contrato = await Contract.findById(id).populate(['clientId', 'planId', 'routerId']);
  if (!contrato) return null;

  return mapContrato(contrato.toObject() as IContract & { _id: Types.ObjectId; __v: number });
};

/**
 * Actualizar contrato
 */
export const actualizarContrato = async (id: string, data: Partial<IContract>) => {
  if (data.clientId) data.clientId = new mongoose.Types.ObjectId(data.clientId);
  if (data.planId) data.planId = new mongoose.Types.ObjectId(data.planId);
  if (data.routerId) data.routerId = new mongoose.Types.ObjectId(data.routerId);
  if (data.fechaInicio) data.fechaInicio = new Date(data.fechaInicio);
  if (data.fechaFin) data.fechaFin = new Date(data.fechaFin);

  const contrato = await Contract.findByIdAndUpdate(id, data, { new: true }).populate([
    'clientId',
    'planId',
    'routerId'
  ]);
  if (!contrato) return null;

  return mapContrato(contrato.toObject() as IContract & { _id: Types.ObjectId; __v: number });
};

/**
 * Eliminar contrato
 */
export const eliminarContrato = async (id: string) => {
  const contrato = await Contract.findByIdAndDelete(id).populate(['clientId', 'planId', 'routerId']);
  if (!contrato) return null;

  return mapContrato(contrato.toObject() as IContract & { _id: Types.ObjectId; __v: number });
};
