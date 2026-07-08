import { useState, type Dispatch, type SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { pessoas } from '../../mockData';

export default function ExcluirPessoa() {
	const [showPopUp, setShowPopUp] = useState(false);
	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		setShowPopUp(true);
	}
	return (
		<>
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
					<button type="submit" onClick={handleClick}>
						Excluir
					</button>
				</form>
			</div>
			{showPopUp && <PopUpExcluirPessoa setShowPopUp={setShowPopUp} />}
		</>
	);
}

function PopUpExcluirPessoa({ setShowPopUp }: { setShowPopUp: Dispatch<SetStateAction<boolean>> }) {
	const [hidePopUp, setHidePopUp] = useState(false);
	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		function hide() {
			setHidePopUp(true);
			// Adiciona um atraso para permitir que a animação de desaparecimento seja concluída antes de remover o pop-up
			setTimeout(() => {
				setShowPopUp(false);
			}, 300);
		}

		if (event.currentTarget.className === 'botao-excluir') {
			alert('Pessoa excluída com sucesso!');
			hide();
			//TODO: adicionar lógica de exclusão da pessoa no banco de dados
		}
		if (event.currentTarget.className === 'botao-cancelar') {
			hide();
		}
	}
	// usa `createPortal` para renderizar o popup em um lugar separado do DOM, 
	// permitindo que ele seja exibido acima de outros elementos da página
	return createPortal(
		<div className={`overlay ${hidePopUp ? 'hide' : ''}`}>
			<div className={`popup popup-excluir-pessoa ${hidePopUp ? 'hide' : ''}`}>
				<h2>Tem certeza que deseja excluir essa pessoa?</h2>
				<p>Ao excluir uma pessoa, todas as transações relacionadas a ela também serão excluídas!</p>
				<div className="botoes">
					<button className="botao-cancelar" onClick={handleClick}>
						Cancelar
					</button>
					<button className="botao-excluir" onClick={handleClick}>
						Excluir
					</button>
				</div>
			</div>
		</div>,
		document.body,
	);
}
