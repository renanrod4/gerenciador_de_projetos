from datetime import datetime
from dateutil.relativedelta import relativedelta
import random

DATA_INICIAL = datetime(2025, 5, 1)
DATA_FINAL = datetime(2026, 7, 8, 23, 59, 59)

# Pessoas cadastradas no mock
pessoas = [
    {"id": "93be:9780:5100:dae8:15b1", "idade": 20},
    {"id": "b7a7:f5aa:fa9a:194e:db6d", "idade": 2},
    {"id": "654a:d52e:ddab:eea2:68e5", "idade": 14},
    {"id": "df17:ad32:0d2a:1836:3b61", "idade": 55},
    {"id": "c372:167f:81ee:6d7b:9dce", "idade": 72},
    {"id": "9e3e:083e:be32:a600:e819", "idade": 69},
]

transacoes = []

RECEITAS_SALARIO = [
    "Salário mensal.",
]

RECEITAS_EXTRAS = [
    "Freelance.",
    "Venda de objeto usado.",
    "Rendimento de investimento.",
    "Restituição.",
    "Reembolso.",
]

DESPESAS_FIXAS = [
    ("Aluguel.", 700, 1800),
    ("Internet residencial.", 80, 180),
    ("Conta de água.", 45, 180),
    ("Conta de energia.", 90, 350),
]

SUPERMERCADO = [
    "Compras em supermercado.",
    "Compras no atacado.",
]

COMBUSTIVEL = [
    "Combustível.",
]

RESTAURANTE = [
    "Restaurante.",
    "Lanchonete.",
    "Delivery.",
]

COMPRAS = [
    "Compras online.",
    "Roupas.",
    "Calçados.",
    "Loja de departamentos.",
    "Eletrônicos.",
]

SAUDE = [
    "Consulta médica.",
    "Medicamentos.",
    "Exames laboratoriais.",
    "Farmácia.",
]

LAZER = [
    "Cinema.",
    "Passeio.",
    "Streaming.",
    "Livros.",
]

INFANTIL = [
    "Material escolar.",
    "Livros escolares.",
    "Uniforme escolar.",
    "Brinquedos.",
    "Consulta pediátrica.",
    "Medicamentos.",
    "Passeio.",
]

def valor(minimo, maximo):
    return round(random.uniform(minimo, maximo), 2)


def data_mes(ano, mes, inicio, fim):
    # Gera uma data aleatória dentro do mês especificado, com hora, minuto e segundo aleatórios.
    while True:

        dia = random.randint(inicio, fim)

        try:

            return datetime(
                ano,
                mes,
                dia,
                random.randint(8, 20),
                random.randint(0, 59),
                random.randint(0, 59),
            )

        except ValueError:
            fim -= 1


def adicionar(
    pessoa,
    data,
    tipo,
    descricao,
    valor_transacao,
):
    # adiciona a transação à lista, se estiver dentro do período definido
    if data > DATA_FINAL:
        return

    if data < DATA_INICIAL:
        return

    transacoes.append(
        {
            "pessoaId": pessoa["id"],
            "data": data,
            "valor": round(valor_transacao, 2),
            "tipo": tipo,
            "descricao": descricao,
        }
    )


def gerar_supermercado(pessoa, ano, mes):
    # Gera de 2 a 5 transações de supermercado para a pessoa no mês especificado
    for _ in range(random.randint(2, 5)):

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(SUPERMERCADO),
            valor(80, 450),
        )


def gerar_combustivel(pessoa, ano, mes):
    # Gera de 1 a 4 transações de combustível para a pessoa no mês especificado
    for _ in range(random.randint(1, 4)):

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(COMBUSTIVEL),
            valor(70, 260),
        )


def gerar_restaurantes(pessoa, ano, mes):
    # Gera de 0 a 4 transações de restaurantes para a pessoa no mês especificado
    for _ in range(random.randint(0, 4)):

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(RESTAURANTE),
            valor(30, 180),
        )


def gerar_compras(pessoa, ano, mes):
    # Gera de 0 a 2 transações de compras para a pessoa no mês especificado
    for _ in range(random.randint(0, 2)):

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(COMPRAS),
            valor(80, 1200),
        )


def gerar_saude(pessoa, ano, mes):
    # Gera uma transação de saúde para a pessoa no mês especificado com 25% de chance
    if random.random() < 0.25:

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(SAUDE),
            valor(60, 600),
        )


def gerar_lazer(pessoa, ano, mes):
    # Gera de 0 a 3 transações de lazer para a pessoa no mês especificado
    for _ in range(random.randint(0, 3)):

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            random.choice(LAZER),
            valor(20, 180),
        )


def gerar_infantil(pessoa, ano, mes):
    # Gera de 2 a 5 transações infantis para a pessoa no mês especificado
    quantidade = random.randint(2, 5)

    for _ in range(quantidade):

        descricao = random.choice(INFANTIL)

        if descricao == "Consulta pediátrica.":
            minimo = 120
            maximo = 400

        elif descricao == "Medicamentos.":
            minimo = 40
            maximo = 180

        elif descricao == "Material escolar.":
            minimo = 40
            maximo = 300

        elif descricao == "Livros escolares.":
            minimo = 40
            maximo = 250

        elif descricao == "Uniforme escolar.":
            minimo = 120
            maximo = 350

        elif descricao == "Brinquedos.":
            minimo = 50
            maximo = 250

        else:
            minimo = 20
            maximo = 150

        adicionar(
            pessoa,
            data_mes(ano, mes, 1, 28),
            "despesa",
            descricao,
            valor(minimo, maximo),
        )

def gerar_historico():
    # Gera o histórico de transações para todas as pessoas entre DATA_INICIAL e DATA_FINAL

    mes_atual = datetime(DATA_INICIAL.year, DATA_INICIAL.month, 1)

    while mes_atual <= DATA_FINAL:

        ano = mes_atual.year
        mes = mes_atual.month

        for pessoa in pessoas:

            if pessoa["idade"] < 18:

                gerar_infantil(pessoa, ano, mes)

                gerar_supermercado(pessoa, ano, mes)

                continue

            # O salário caí no início do mês, entre o dia 1 e o dia 5
            salario = random.randint(2500, 7000)

            adicionar(
                pessoa,
                data_mes(ano, mes, 1, 5),
                "receita",
                random.choice(RECEITAS_SALARIO),
                salario
            )

            # O décimo terceiro salário é pago em dezembro, entre o dia 15 e o dia 22
            if mes == 12:

                adicionar(
                    pessoa,
                    data_mes(ano, mes, 15, 22),
                    "receita",
                    "Décimo terceiro salário.",
                    salario
                )

            
            adicionar(
                pessoa,
                data_mes(ano, mes, 5, 10),
                "despesa",
                "Aluguel.",
                valor(700, 1800)
            )

            adicionar(
                pessoa,
                data_mes(ano, mes, 10, 15),
                "despesa",
                "Internet residencial.",
                valor(80, 180)
            )

            adicionar(
                pessoa,
                data_mes(ano, mes, 12, 18),
                "despesa",
                "Conta de água.",
                valor(45, 180)
            )

            adicionar(
                pessoa,
                data_mes(ano, mes, 15, 22),
                "despesa",
                "Conta de energia.",
                valor(90, 350)
            )

            if random.random() < 0.20:

                adicionar(
                    pessoa,
                    data_mes(ano, mes, 10, 28),
                    "receita",
                    random.choice(RECEITAS_EXTRAS),
                    valor(100, 1800)
                )

            gerar_supermercado(pessoa, ano, mes)
            gerar_combustivel(pessoa, ano, mes)
            gerar_restaurantes(pessoa, ano, mes)
            gerar_compras(pessoa, ano, mes)
            gerar_saude(pessoa, ano, mes)
            gerar_lazer(pessoa, ano, mes)

        mes_atual += relativedelta(months=1)


gerar_historico()

# Ordena da mais recente para a mais antiga
transacoes.sort(
    key=lambda t: t["data"],
    reverse=True
)

linhas = []

# Gera o arquivo transacoes.js com as transações geradas
linhas.append("export const transacoes = [")

for t in transacoes:

    if t["valor"].is_integer():
        valor_str = str(int(t["valor"]))
    else:
        valor_str = f"{t['valor']:.2f}".rstrip("0").rstrip(".")

    linhas.extend([
        "    {",
        f"        pessoaId: '{t['pessoaId']}',",
        f"        data: '{t['data'].strftime('%Y-%m-%dT%H:%M:%S')}',",
        f"        valor: {valor_str},",
        f"        tipo: '{t['tipo']}',",
        f"        descricao: '{t['descricao']}',",
        "        id: crypto.randomUUID(),",
        "    },",
    ])

linhas.append("];")

with open("transacoes.js", "w", encoding="utf-8") as f:
    f.write("\n".join(linhas))

print("Arquivo transacoes.js criado com sucesso!")