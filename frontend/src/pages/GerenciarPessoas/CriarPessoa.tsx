import { useState } from 'react';

export default function CriarPessoa() {
	const [nome, setNome] = useState('');
	const [dataNascimento, setDataNascimento] = useState('');
	function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/pessoas`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nome,
				dataNascimento,
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Erro ao adicionar pessoa');
				}
				return response.json();
			})
			.then(data => {
				console.log('Pessoa adicionada com sucesso:', data);
				setNome('');
				setDataNascimento('');
			})
			.catch(error => {
				console.error('Erro ao adicionar pessoa:', error);
			});
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
