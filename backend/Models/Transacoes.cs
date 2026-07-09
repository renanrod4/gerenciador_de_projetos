namespace backend.Models;

public enum TipoTransacao { Despesa, Receita }

public class Transacao
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Descricao { get; set; }
    public required decimal Valor { get; set; }
    public required DateTime Data { get; set; }
    public required TipoTransacao Tipo { get; set; }

    public required string PessoaId { get; set; }
    
    // Propriedade de navegação para a pessoa associada à transação
    public Pessoa? Pessoa { get; set; }
}