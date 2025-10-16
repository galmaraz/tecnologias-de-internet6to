import Contract from '../models/contract.model';
import { IContract } from '../interfaces/IContract';

export const crearContrato = async (data: Partial<IContract>) => {
  const contrato = new Contract(data);
  return await contrato.save();
};

export const obtenerContratos = async () => {
  return await Contract.find().populate('clienteId planId');
};

export const actualizarContrato = async (id: string, data: Partial<IContract>) => {
  return await Contract.findByIdAndUpdate(id, data, { new: true });
};

export const eliminarContrato = async (id: string) => {
  // Puedes agregar validación de si está activo antes de eliminar
  return await Contract.findByIdAndDelete(id);
};
