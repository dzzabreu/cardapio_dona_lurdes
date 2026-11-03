import { Router } from 'express';
import doceController from '../controllers/DoceController.js';

const router = Router();

// 1. Rota de Listagem (GET /doces)
router.get('/', doceController.listar);

// 2. Rota do Formulário de Criação (GET /doces/novo)
router.get('/novo', doceController.formCriar);

// 3. Rota de Processamento de Cadastro (POST /doces)
router.post('/', doceController.criar);

// 4. Rota do Formulário de Edição (GET /doces/:id/editar)
router.get('/:id/editar', doceController.formEditar);

// 5. Rota de Processamento de Atualização (PUT /doces/:id)
router.put('/:id', doceController.atualizar);

// 6. Rota de Processamento de Exclusão (DELETE /doces/:id)
router.delete('/:id', doceController.deletar);

export default router;