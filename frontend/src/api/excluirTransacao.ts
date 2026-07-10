export async function excluirTransacao(id: string) {
	try {
		await fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/transacoes/${id}`, {
			method: 'DELETE',
		}).then(response => {
			if (!response.ok) {
				throw new Error('Erro ao excluir transação');
			}
			console.log('Transação excluída com sucesso');
		});
	} catch (error) {
		console.error('Erro ao excluir transação:', error);
	}
}
