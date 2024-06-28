import axios from 'axios';

interface Produto {
    nome: string;
    preco: number | string;
    descricao: string;
    material: string;
    categoria: string;
}

export const enviarProduto = async (produto: Produto) => {
    try {
        const response = await axios.post('http://localhost:3001/api/products', {
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao,
            material: produto.material,
            categoria_id: parseInt(produto.categoria), // Convertendo categoria para número
        });
        console.log('Produto criado:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        throw error;
    }
};
