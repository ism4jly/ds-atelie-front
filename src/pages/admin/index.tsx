// pages/Admin.tsx
import React, { useState } from 'react';
import { enviarProduto } from '../../services/api';

interface Produto {
    nome: string;
    preco: number | string;
    descricao: string;
    material: string;
    categoria: string;
}

const Admin: React.FC = () => {
    const [produto, setProduto] = useState<Produto>({
        nome: '',
        preco: '',
        descricao: '',
        material: '',
        categoria: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const resultado = await enviarProduto(produto);
            console.log('Resultado:', resultado);
            // Lógica adicional após criar o produto, como limpar o formulário ou atualizar a lista de produtos.
            setProduto({ nome: '', preco: '', descricao: '', material: '', categoria: '' });
        } catch (error) {
            console.error('Erro ao enviar produto:', error);
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-slate-700 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-10 flex flex-col rounded-lg w-full max-w-md">
                <label className="mb-2 font-bold">Nome</label>
                <input className="mb-4 border p-2 rounded bg-gray-700 text-white font-medium" type="text" name="nome" value={produto.nome} onChange={handleChange} required />

                <label className="mb-2 font-bold">Preço</label>
                <input className="mb-4 border p-2 rounded bg-gray-700 text-white font-medium" type="number" name="preco" value={produto.preco} onChange={handleChange} step="0.01" required />

                <label className="mb-2 font-bold">Descrição</label>
                <textarea className="mb-4 border p-2 rounded bg-gray-700 text-white font-medium" name="descricao" value={produto.descricao} onChange={handleChange} required />

                <label className="mb-2 font-bold">Material</label>
                <input className="mb-4 border p-2 rounded bg-gray-700 text-white font-medium" type="text" name="material" value={produto.material} onChange={handleChange} required />

                <label className="mb-2 font-bold">Categoria</label>
                <input className="mb-4 border p-2 rounded bg-gray-700 text-white font-medium" type="number" name="categoria" value={produto.categoria} onChange={handleChange} required />

                <button className="bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-700 transition duration-300" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Admin;
