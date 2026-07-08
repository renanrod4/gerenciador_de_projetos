import { FaPlus } from 'react-icons/fa';
import TransacaoCards from './LancarTransacoes/TransacaoCards';
import TransacaoCardsHeader from './LancarTransacoes/TransacaoCardsHeader';

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
				<TransacaoCardsHeader />
				<TransacaoCards />
			</div>
		</>
	);
}

