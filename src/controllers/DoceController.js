import doceRepository from '../repositories/DoceRepository.js';

class DoceController {
    // 1. Renderiza a tela com a lista de todos os doces (GET /doces)
    async listar(req, res) {
        try {
            const doces = await doceRepository.listarTodos();
            res.render('doces/index', { doces });
        } catch (error) {
            res.status(500).send('Erro ao buscar doces: ' + error.message);
        }
    }

    // 2. Renderiza o formulário para criar um novo doce (GET /doces/novo)
    async formCriar(req, res) {
        res.render('doces/novo');
    }

    // 3. Recebe os dados do formulário e salva no banco (POST /doces)
    async criar(req, res) {
        try {
            await doceRepository.criar(req.body);
            res.redirect('/doces');
        } catch (error) {
            res.status(500).send('Erro ao cadastrar doce: ' + error.message);
        }
    }

    // 4. Renderiza o formulário com os dados preenchidos para edição (GET /doces/:id/editar)
    async formEditar(req, res) {
        try {
            const { id } = req.params;
            const doce = await doceRepository.buscarPorId(id);

            if (!doce) {
                return res.status(404).send('Doce não encontrado!');
            }

            res.render('doces/editar', { doce });
        } catch (error) {
            res.status(500).send('Erro ao carregar formulário: ' + error.message);
        }
    }

    // 5. Recebe os dados alterados do formulário e atualiza o banco (PUT /doces/:id)
    async atualizar(req, res) {
        try {
            const { id } = req.params;
            await doceRepository.atualizar(id, req.body);
            res.redirect('/doces');
        } catch (error) {
            res.status(500).send('Erro ao atualizar doce: ' + error.message);
        }
    }

    // 6. Remove um doce do banco pelo ID (DELETE /doces/:id)
    async deletar(req, res) {
        try {
            const { id } = req.params;
            await doceRepository.deletar(id);
            res.redirect('/doces');
        } catch (error) {
            res.status(500).send('Erro ao deletar doce: ' + error.message);
        }
    }
}

export default new DoceController();