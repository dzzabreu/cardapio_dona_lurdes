import prisma from '../prisma.js';

class DoceRepository {
    // 1. Listar todos os doces
    async listarTodos() {
        return await prisma.doce.findMany();
    }

    // 2. Buscar um doce pelo ID
    async buscarPorId(id) {
        return await prisma.doce.findUnique({
            where: { id: Number(id) }
        });
    }

    // 3. Criar um novo doce
    async criar(dados) {
        return await prisma.doce.create({
            data: {
                nome: dados.nome,
                preco: parseFloat(dados.preco)
            }
        });
    }

    // 4. Atualizar um doce existente
    async atualizar(id, dados) {
        return await prisma.doce.update({
            where: { id: Number(id) },
            data: {
                nome: dados.nome,
                preco: parseFloat(dados.preco)
            }
        });
    }

    // 5. Deletar um doce pelo ID
    async deletar(id) {
        return await prisma.doce.delete({
            where: { id: Number(id) }
        });
    }
}

export default new DoceRepository();