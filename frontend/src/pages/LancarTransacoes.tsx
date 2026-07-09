import { FaPlus } from 'react-icons/fa';
import TransacaoCards from './LancarTransacoes/TransacaoCards';
import TransacaoCardsHeader from './LancarTransacoes/TransacaoCardsHeader';
import { useState } from 'react';

import PopupLancarTransacao from './LancarTransacoes/PopupLancarTransacao';

export default function LancarTransacoes() {
	const [isLancarTransacaoOpen, setIsLancarTransacaoOpen] = useState(false);
	function handleClick() {
		setIsLancarTransacaoOpen(true);
	}
	return (
		<>
			<div className="lancar-transacoes-cards">
				<div className="header">
					<h2>Histórico de transações</h2>
					<button className="lancar-transacao" onClick={handleClick}>
						<FaPlus />
						<p>Lançar transação</p>
					</button>
				</div>
				<TransacaoCardsHeader />
				<TransacaoCards />
			</div>
			{isLancarTransacaoOpen && <PopupLancarTransacao setIsLancarTransacaoOpen={setIsLancarTransacaoOpen} />}
		</>
	);
}
