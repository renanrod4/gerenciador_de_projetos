import { transacoes } from '../mockData';
import { FaPlus } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

export default function LancarTransacoes() {
	return (
		<>
			<div className="lancar-transacoes-cards">
				<div className="header">
					<h2>Histórico de transações</h2>
					<button className="lancar-transacao">
						<FaPlus />
						<p>Lançar transação</p>
					</button>
				</div>
        <div className="transacao-cards-header">
          <p className="id">ID</p>
          <p className="nome">Nome</p>
          <p className="data">Data</p>
          <p className="valor">Valor</p>
        </div>
				<TransacaoCards />
			</div>
		</>
	);
}
function TransacaoCards() {
	return (
		<div className="transacao-cards">
			{transacoes.map(transacao => (
				<TransacaoCard
					key={transacao.id}
					id={transacao.id}
					nome={transacao.nome}
					valor={transacao.valor}
					data={transacao.data}
					tipo={transacao.tipo as 'despesa' | 'receita'}
					descricao={transacao.descricao}
				/>
			))}
		</div>
	);
}

function TransacaoCard({
	id,
	nome,
	valor,
	data,
	tipo,
	descricao,
}: {
	id: string;
	nome: string;
	valor: number;
	data: string;
	tipo: 'despesa' | 'receita';
	descricao: string;
}) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	return (
		<div className="transacao-card">
			<div className="header">
				<div className="idCard">
					{/* Não mostra o ID inteiro para não ocupar muito espaço, porém implementa opção de copiar */}
					<p className="id">ID: {id.slice(0, 8) + '...'}</p>
					<button className="copyButton" onClick={() => navigator.clipboard.writeText(id)}>
						<IoCopyOutline />
					</button>
				</div>
        {/* Mostra apenas os 3 primeiros nomes do usuário, caso ele tenha mais de 3 nomes */}
				<p className="nome">{nome.split(' ').slice(0, 2).join(' ')}</p>

				{/* transformar data no formato pt-br */}
				<p className="data">{new Date(data).toLocaleDateString('pt-BR')}</p>

				{/* a cor do `valor` vai mudar de acordo com o tipo(despesa ou receita) */}
				{/* muda o valor para o formato usado no Brasil, com vírgula como separador decimal e ponto como separador de milhar */}
				<p className={`valor ${tipo}`}>
					{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
				</p>
				<button
					className={`descricao-btn ` + (isDropdownOpen ? 'open' : '')}
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				>
					<FaAngleDown />
				</button>
			</div>
        <div className={"descricao-container " + (isDropdownOpen ? 'open' : '')}>
          <p className="descricao">{descricao}</p>
        </div>
		</div>
	);
}
