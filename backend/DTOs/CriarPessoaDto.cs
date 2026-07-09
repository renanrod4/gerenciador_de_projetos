namespace backend.DTOs;

public class CriarPessoaDTO
{
    public required string Nome { get; set; }
    public required DateTime DataNascimento { get; set; }
}