export async function excluirPessoa(pessoaId: string) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/pessoas/${pessoaId}`,
			{
				method: 'DELETE',
			}
		);

		if (!response.ok) {
			throw new Error('Erro ao excluir pessoa');
		}

		console.log('Pessoa excluída com sucesso!');
	} catch (error) {
		console.error('Erro ao excluir pessoa:', error);
		throw error;
	}
}