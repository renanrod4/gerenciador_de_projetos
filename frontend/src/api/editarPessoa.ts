export async function editarPessoa(id: string, nome: string, dataNascimento: string): Promise<void> {
    await fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, dataNascimento }),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Erro ao editar pessoa');
        }
        return response.json();
    }).then(data => {
        console.log('Pessoa editada com sucesso:', data);
    }).catch(error => {
        console.error('Erro ao editar pessoa:', error);
    });

}