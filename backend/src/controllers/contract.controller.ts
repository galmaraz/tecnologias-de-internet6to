import { Request, Response } from 'express';
import * as ContractService from '../services/contract.service';
import { IContract } from '../interfaces/IContract';


interface ContractParams {
  id: string;
}

// Crear contrato
export const crearContrato = async (req: Request<{}, {}, IContract>, res: Response) => {
  try {
    const contrato = await ContractService.crearContrato(req.body);
    res.status(201).json(contrato);
  } catch (error) {
    res.status(500).json({ message: 'Error creando contrato', error });
  }
};

// Obtener todos los contratos
export const obtenerContratos = async (_req: Request, res: Response) => {
  try {
    const contratos = await ContractService.obtenerContratos();
    res.json(contratos);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo contratos', error });
  }
};

// Obtener contrato por id
export const obtenerContrato = async (req: Request<ContractParams>, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID es requerido' });

    const contrato = await ContractService.obtenerContrato(id);
    if (!contrato) return res.status(404).json({ message: 'Contrato no encontrado' });

    res.json(contrato);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo contrato', error });
  }
};

// Actualizar contrato
export const actualizarContrato = async (req: Request<ContractParams, {}, Partial<IContract>>, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID es requerido' });

    const contrato = await ContractService.actualizarContrato(id, req.body);
    if (!contrato) return res.status(404).json({ message: 'Contrato no encontrado' });

    res.json(contrato);
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando contrato', error });
  }
};

// Eliminar contrato
export const eliminarContrato = async (req: Request<ContractParams>, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'ID es requerido' });

    const contrato = await ContractService.eliminarContrato(id);
    if (!contrato) return res.status(404).json({ message: 'Contrato no encontrado' });

    res.json({ message: 'Contrato eliminado', contrato });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando contrato', error });
  }
};
