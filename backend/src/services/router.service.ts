import RouterModel from '../models/router.model';
import { Types } from 'mongoose';
import { Router } from '../interfaces/IRouter';

export const crearRouter = async (data: Partial<Router>): Promise<Router> => {
  const router = await RouterModel.create({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const { _id, __v, ...rest } = router.toObject() as { _id: Types.ObjectId; __v: any };
  return { ...rest, id: _id.toString() };
};

export const obtenerRouters = async (): Promise<Router[]> => {
  const routers = await RouterModel.find();
  return routers.map(r => {
    const { _id, __v, ...rest } = r.toObject() as { _id: Types.ObjectId; __v: any };
    return { ...rest, id: _id.toString() };
  });
};

export const obtenerRouter = async (id: string): Promise<Router | null> => {
  const router = await RouterModel.findById(id);
  if (!router) return null;
  const { _id, __v, ...rest } = router.toObject() as { _id: Types.ObjectId; __v: any };
  return { ...rest, id: _id.toString() };
};

export const actualizarRouter = async (id: string, data: Partial<Router>): Promise<Router | null> => {
  const router = await RouterModel.findByIdAndUpdate(id, { ...data, updatedAt: new Date() }, { new: true });
  if (!router) return null;
  const { _id, __v, ...rest } = router.toObject() as { _id: Types.ObjectId; __v: any };
  return { ...rest, id: _id.toString() };
};

export const eliminarRouter = async (id: string): Promise<Router | null> => {
  const router = await RouterModel.findByIdAndDelete(id);
  if (!router) return null;
  const { _id, __v, ...rest } = router.toObject() as { _id: Types.ObjectId; __v: any };
  return { ...rest, id: _id.toString() };
};
