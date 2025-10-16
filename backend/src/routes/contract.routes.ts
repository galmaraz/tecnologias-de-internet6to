import { Router } from 'express';
import { crearContrato, obtenerContratos, actualizarContrato, eliminarContrato } from '../controllers/contract.controller';

const router = Router();

router.post('/', crearContrato);
router.get('/', obtenerContratos);
router.put('/:id', actualizarContrato);
router.delete('/:id', eliminarContrato);

export default router;
