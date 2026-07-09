import { useState } from 'react';
import { criarPessoa } from '../../api/criarPessoas';

export default function CriarPessoa({ onPessoaCriada }: { onPessoaCriada: () => void }) {
	const [nome, setNome] = useState('');
	const [dataNascimento, setDataNascimento] = useState('');
	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		await criarPessoa(nome, dataNascimento);
		onPessoaCriada();
		console.log('Pessoa criada com sucesso!');
		setNome('');
		setDataNascimento('');
	}
	return (
		<div className="gerenciar-pessoas-cards criarPessoa">
			<h2>Adicionar pessoa</h2>
			<form className="formulario" action="">
				<p>nome:</p>
				<input
					type="text"
					name="nome"
					id="nome"
					placeholder="Digite o nome da pessoa..."
					value={nome}
					onChange={e => setNome(e.target.value)}
				/>
				<p>data de nascimento:</p>
				<input
					type="date"
					name="dataNascimento"
					id="dataNascimento"
					value={dataNascimento}
					onChange={e => setDataNascimento(e.target.value)}
				/>
				<button type="submit" onClick={handleSubmit}>
					Adicionar
				</button>
			</form>
		</div>
	);
}
