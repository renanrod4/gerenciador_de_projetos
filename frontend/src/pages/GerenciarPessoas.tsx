import { FaRegEdit } from 'react-icons/fa';

const pessoas = [
	{ nome: 'Virginia Simon', idade: 20, id: crypto.randomUUID() },
	{ nome: 'Jorge Phillips', idade: 2, id: crypto.randomUUID() },
	{ nome: 'Inez Tran', idade: 14, id: crypto.randomUUID() },
	{ nome: 'Alan Nguyen', idade: 55, id: crypto.randomUUID() },
	{ nome: 'Susie Tucker', idade: 72, id: crypto.randomUUID() },
	{ nome: 'Henrietta Reid', idade: 69, id: crypto.randomUUID() },

];

export default function GerenciarPessoas() {
	return (
		<>
			<CardGerenciarPessoas />
			<div className="coluna-direita">
				<div className="gerenciar-pessoas-cards criarPessoa">
					<h2>Adicionar nova pessoa</h2>
					<form className="formulario" action="">
						<p>nome:</p>
						<input type="text" name="nome" id="nome" placeholder="Digite o nome da pessoa..." />
						<p>idade:</p>
						<input
							type="number"
							name="idade"
							id="idade"
							min={0}
							max={120}
							placeholder="Digite a idade da pessoa..."
						/>
						<button type="submit">Adicionar</button>
					</form>
				</div>

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
			</div>
		</>
	);
}

function CardGerenciarPessoas() {
	return (
		<div className="gerenciar-pessoas-cards gerenciarPessoas">
			<h2>Gerenciar Pessoas</h2>
			<ListaPessoas />
		</div>
	);
}
function ListaPessoas() {
	return (
		<ul className="lista-pessoas">
			{pessoas.map(pessoa => {
				return <Pessoa key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} />;
			})}
		</ul>
	);
}

function Pessoa({ nome, idade }: { nome: string; idade: number }) {
	return (
		<li className="pessoa">
			<p className="nome">{nome}</p>
			<p className="idade">{idade} anos</p>
			<button>
				<FaRegEdit />
			</button>
		</li>
	);
}
