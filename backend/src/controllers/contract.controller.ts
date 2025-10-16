import { Request, Response } from 'express';
import * as ContractService from '../services/contract.service';

export const crearContrato = async (req: Request, res: Response) => {
  try {
    const contrato = await ContractService.crearContrato(req.body);
    res.status(201).json(contrato);
  } catch (error) {
    res.status(500).json({ message: 'Error creando contrato', error });
  }
};

export const obtenerContratos = async (req: Request, res: Response) => {
  try {
    const contratos = await ContractService.obtenerContratos();
    res.json(contratos);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo contratos', error });
  }
};

export const actualizarContrato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID es requerido' });

    const contrato = await ContractService.actualizarContrato(id, req.body);
    res.json(contrato);
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando contrato', error });
  }
};

export const eliminarContrato = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID es requerido' });

    const contrato = await ContractService.eliminarContrato(id);
    res.json({ message: 'Contrato eliminado', contrato });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando contrato', error });
  }
};

