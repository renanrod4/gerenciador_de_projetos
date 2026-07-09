import type { Dispatch, SetStateAction } from "react";
import type { pessoasType } from "../mockData";

export async function fetchPessoas(setPessoas: Dispatch<SetStateAction<pessoasType>>, setSelectedPessoa: Dispatch<SetStateAction<pessoasType[number] | null>>) {
	await fetch(`${import.meta.env.VITE_DOTNET_HOST_ADDRESS}/api/pessoas`)
		.then(response => response.json())
		.then(data => {
			setPessoas(data);
			if (data.length > 0) {
				// Define o ID da primeira pessoa como selecionada por padrão
				setSelectedPessoa(data[0]);
			}
		})
		.catch(error => {
			console.error('Erro ao buscar pessoas:', error);
		});
}
