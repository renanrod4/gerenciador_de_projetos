import { FaRegEdit } from "react-icons/fa";
import { pessoas } from "../../mockData";

export default function CardGerenciarPessoas() {
	return (
		<div className="gerenciar-pessoas-cards gerenciarPessoas">
			<h2>Pessoas na casa</h2>
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