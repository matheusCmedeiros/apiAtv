import { Router } from 'express';
import { criarDiretorio, listarConteudoDiretorio, deletarDiretorio } from '../controller/diretorio-controller';

const router = Router();

router.post('/criar', criarDiretorio);
router.get('/listar', listarConteudoDiretorio);
router.delete('/deletar', deletarDiretorio);

export default router;