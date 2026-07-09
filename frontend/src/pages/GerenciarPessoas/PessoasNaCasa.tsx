import { FaRegEdit } from "react-icons/fa";
import type { pessoasType } from "../../mockData";

export default function CardGerenciarPessoas({ pessoas }: { pessoas: pessoasType;}) {
	return (
		<div className="gerenciar-pessoas-cards gerenciarPessoas">
			<h2>Pessoas na casa</h2>
			<ListaPessoas pessoas={pessoas}/>
		</div>
	);
}

function ListaPessoas({ pessoas  }: { pessoas: pessoasType; }) {
	return (
		<ul className="lista-pessoas">
			{pessoas.map(pessoa => {
				const idade = new Date().getFullYear() - new Date(pessoa.dataNascimento).getFullYear();
				return <Pessoa key={pessoa.id} nome={pessoa.nome} idade={idade} />;
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