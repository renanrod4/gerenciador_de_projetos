import { pessoas } from "../../mockData";

export default function ExcluirPessoa() {
	return (
		<div className="gerenciar-pessoas-cards excluirPessoa">
			<h2>Excluir pessoa</h2>
			<form className="formulario" action="">
				<p>nome:</p>
				{/* input de escolha com nomes */}
				{/*TODO: adicionar nomes via consulta no banco de dados */}
				<select name="nome" id="nome">
					{pessoas.map(pessoa => (
						<option key={pessoa.id} value={pessoa.nome}>
							{pessoa.nome}
						</option>
					))}
				</select>
				<button type="submit">Excluir</button>
			</form>
		</div>
	);
}
