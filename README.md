# Gerenciador de Gastos Residenciais

Sistema completo para controle de despesas e receitas domésticas por pessoa. A aplicação conta com um ecossistema completo composto por uma API RESTful e uma interface interativa.

## Funcionalidades Principais

* **Painel Geral (Dashboard):** Exibição de métricas globais (Total de Receitas, Total de Despesas e Saldo Líquido Geral) e tabela consolidada de saldos individuais por pessoa
* **Gerenciamento de Pessoas:** CRUD completo (Criação, Listagem, Edição e Exclusão) de pessoas
* **Lançamento de Transações:** Cadastro e histórico completo de movimentações financeiras com filtros por tipo, período e nome da pessoa

## Diferenciais e Decisões de Arquitetura

* **Cálculo Dinâmico de Idade:** Em vez de armazenar um valor estático de idade no banco de dados (o que tornaria o dado obsoleto com o tempo), o sistema armazena a Data de Nascimento e calcula a idade em tempo real tanto no backend quanto no frontend.
* **Validação de Regras de Negócio no Frontend e Backend:** A restrição que impede menores de idade (menos de 18 anos) de cadastrarem receitas é validada visualmente na interface (bloqueio de campo com feedback em tooltip)
* **Exclusão em Cascata (Cascade Delete):** Configurado via Entity Framework Core para garantir que, ao remover uma pessoa do sistema, todas as suas transações vinculadas sejam eliminadas automaticamente


## Tecnologias Utilizadas

### Backend
* .NET 8 / C#
* ASP.NET Core Web API
* Entity Framework Core (EF Core)
* SQLite (Banco de dados relacional local)

### Frontend
* React
* TypeScript
* Vite (Ferramenta de build e servidor de desenvolvimento)
* Tailwind CSS (Estilização e interface responsiva)

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
* SDK do .NET 8
* Node.js (versão 18 ou superior)
* Ferramentas do Entity Framework Core globalmente instaladas. Caso não tenha, instale com o comando:
```bash
dotnet tool install --global dotnet-ef
```

---

## Como Rodar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/renanrod4/gerenciador_de_projetos.git
cd gerenciador_de_projetos
```

### 2. Configurar e Inicializar o Backend
Abra o terminal na pasta do backend:
```bash
cd backend
```
Restaure as dependências do projeto:
```bash
dotnet restore
```
Execute as migrações para criar o arquivo de banco de dados SQLite (app.db) localmente:
```bash
dotnet ef database update
```
Inicie o servidor da API:
```bash
dotnet run
```
A API estará disponível por padrão no endereço: http://localhost:5038. Você pode inspecionar as rotas utilizando o arquivo backend.http incluso na pasta.

### 3. Configurar e Inicializar o Frontend
Abra um novo terminal na raiz do projeto e acesse a pasta do frontend:
```bash
cd frontend
```
Instale os pacotes necessários:
```bash
npm install
```
Crie o arquivo de variáveis de ambiente com base no modelo fornecido:
```bash
cp .env.example .env
```
Certifique-se de que a URL dentro do arquivo .env aponta para o endereço correto da sua API backend.

Inicie o servidor de desenvolvimento do React:
```bash
npm run dev
```
O terminal exibirá o endereço local (geralmente http://localhost:5173) para acessar a interface do sistema pelo navegador.

---

## Estrutura do Repositório

```text
├── backend/
│   ├── Controllers/            # Endpoints da API (Pessoas e Transações)
│   ├── DTOs/                   # Objetos de Transferência de Dados (Data Transfer Objects)
│   ├── Data/                   # Contexto do banco de dados (AppDbContext)
│   ├── Migrations/             # Histórico de migrações do Entity Framework
│   ├── Models/                 # Entidades do domínio (Pessoa e Transações)
│   └── backend.http            # Arquivo de testes de requisições HTTP
├── frontend/
│   ├── src/
│   │   ├── api/                # Serviços de integração com o Backend
│   │   ├── components/         # Componentes visuais reutilizáveis
│   │   ├── pages/              # Telas da aplicação (Painel Geral, Gerenciar, Lançar)
│   │   └── main.tsx            # Ponto de entrada do React
└── planejamento.md             # Documentação interna de escopo
```