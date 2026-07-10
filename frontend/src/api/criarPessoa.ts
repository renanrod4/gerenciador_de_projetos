export async function criarPessoa(nome: string, dataNascimento: string) {
	await fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/pessoas`, {
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
		})
		.catch(error => {
			console.error('Erro ao adicionar pessoa:', error);
		});
}
