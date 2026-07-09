export default function CriarPessoa() {
	return (
		<div className="gerenciar-pessoas-cards criarPessoa">
			<h2>Adicionar pessoa</h2>
			<form className="formulario" action="">
				<p>nome:</p>
				<input type="text" name="nome" id="nome" placeholder="Digite o nome da pessoa..." />
				<p>data de nascimento:</p>
				<input type="date" name="dataNascimento" id="dataNascimento" />
				<button type="submit">Adicionar</button>
			</form>
		</div>
	);
}
