namespace backend.Models;

public class Pessoa
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Nome { get; set; }
    public required DateTime DataNascimento { get; set; }

    // para armazenar as transações associadas a esta pessoa
    public ICollection<Transacao> Transacoes { get; set; } = new List<Transacao>();
}
