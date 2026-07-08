# Planejamento do Projeto: Gerenciador de Gastos Residenciais
---

## Fluxo e Jornada do Usuário (UX/UI)

O sistema será implementado como uma **SPA (Single Page Application) sem roteamento**, utilizando um menu superior de Abas (`Tabs`) para alternar a interface instantaneamente sem recarregamento de página.

### Aba 1: Painel Geral (Visão Padrão)
* **Objetivo:** Dar ao usuário a telemetria financeira imediata da residência.
* **Elementos em Tela:**
  * **Cards:** Total Geral de Receitas, Total Geral de Despesas e Saldo Líquido Geral da casa
  * **Tabela de Detalhamento por Pessoa:** Colunas exibindo `Nome | Total Receitas | Total Despesas | Saldo Individual `.
* **Estado Inicial:** Caso o banco esteja vazio, exibe mensagens informando que nenhuma pessoa ou transação foi computada ainda.

### Aba 2: Gerenciar Pessoas <!--* OK  -->
* **Objetivo:** Cadastrar e remover os membros da residência.
* **Elementos em Tela:**
  * **Formulário de Cadastro:** Inputs de `Nome` e `Idade`.
  * **Lista de Pessoas:** Tabela exibindo os membros cadastrados acompanhados de um botão `Excluir`.
  * **Regra Crítica:** Um aviso visual lembrará o usuário de que, ao deletar uma pessoa, todos os gastos vinculados a ela serão apagados permanentemente

### Aba 3: Lançar Transações
* **Objetivo:** Registrar as movimentações financeiras da casa.
* **Elementos em Tela:**
  * **Formulário de Lançamento:** Inputs de `Descrição`, `Valor`, `Tipo` (Select: Receita / Despesa) e `Quem fez a movimentação` (Select com nome das pessoas da casa).
  * **Regra de Negócio de Maioridade:** Se o usuário selecionar uma pessoa menor de 18 anos, a opção `Tipo` mudará automaticamente para despesa e ficará indisponivel para mudança enquanto o usuário selecionado for menor de idade

