// componente Tab são as abas do Header
export default function Tab({
	label,
	activeTabId,
	id,
	onClick,
}: {
	label: string;
	activeTabId: number;
	id: number;
	onClick: () => void;
}) {
	const isActive = activeTabId === id;
	return (
		<li
			className={isActive ? 'active' : ''}
			onClick={onClick}
			// criar sistema de cores por distancia entre as tabs, aplicando 10% de diferença entre cada tab
			style={{
				backgroundColor: isActive
					? 'var(--cor-azul)'
					: `color-mix(in srgb, color-mix(in srgb, var(--cor-fundo-pasta) 40%, var(--cor-azul) 60%) ${100 - Math.abs(activeTabId - id) * 10}%, #000)`,
			}}
		>
			{label}
		</li>
	);
}
