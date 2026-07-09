import { useState} from 'react';
import './App.css';
import Header from './components/Header';
import PainelGeral from './pages/PainelGeral';
import GerenciarPessoas from './pages/GerenciarPessoas';
import LancarTransacoes from './pages/LancarTransacoes';

export default function App() {
	const [activeTabId, setActiveTabId] = useState<number>(0);
	return (
		<div>
			{/* Renderiza o Header com as abas */}
			<Header activeTabId={activeTabId} setActiveTabId={setActiveTabId} />

      {/* Renderiza o conteúdo da aba ativa */}
			<main>
        {activeTabId === 0 && <PainelGeral />}
        {activeTabId === 1 && <GerenciarPessoas />}
        {activeTabId === 2 && <LancarTransacoes />}
      </main>
		</div>
	);
}