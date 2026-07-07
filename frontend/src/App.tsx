import { useState} from 'react';
import './App.css';
import Header from './components/Header';

export default function App() {
	const [activeTabId, setActiveTabId] = useState<number>(1);
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

function PainelGeral() {
  return (
    <>
      <h2>Painel Geral</h2>
      {/* Conteúdo do Painel Geral */}
    </>
  );
}
function GerenciarPessoas() {
  return (
    <>
      <h2>Gerenciar Pessoas</h2>
      {/* Conteúdo do Gerenciar Pessoas */}
    </>
  );
}
function LancarTransacoes() {
  return (
    <>
      <h2>Lançar Transações</h2>
      {/* Conteúdo do Lançar Transações */}
    </>
  );
}