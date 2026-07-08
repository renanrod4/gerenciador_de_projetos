export default function CriarPessoa() {
	return (
		<div className="gerenciar-pessoas-cards criarPessoa">
			<h2>Adicionar pessoa</h2>
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
	);
}
