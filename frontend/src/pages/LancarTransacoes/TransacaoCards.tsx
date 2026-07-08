import { transacoes } from "../../mockData";
import TransacaoCard from "./TransacaoCard";

export default function TransacaoCards() {
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
