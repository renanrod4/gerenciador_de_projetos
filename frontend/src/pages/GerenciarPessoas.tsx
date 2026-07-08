import CriarPessoa from './GerenciarPessoas/CriarPessoa';
import ExcluirPessoa from './GerenciarPessoas/ExcluirPessoa';
import CardGerenciarPessoas from './GerenciarPessoas/PessoasNaCasa';

export default function GerenciarPessoas() {
	return (
		<>
			<CardGerenciarPessoas />
			<div className="criar-excluir-pessoa">
				<CriarPessoa />
				<ExcluirPessoa />
			</div>
		</>
	);
}
