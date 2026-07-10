export async function criarTransacao(pessoaId: string, valor: number, data: string, tipo: 'receita' | 'despesa', descricao: string) {
    await fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/transacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pessoaId, valor, data, tipo, descricao }),
    })
}