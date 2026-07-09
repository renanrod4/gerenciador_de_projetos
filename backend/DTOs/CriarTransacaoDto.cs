using backend.Models;

namespace backend.DTOs;

public class CriarTransacaoDto
{
    public required string Descricao { get; set;}
    public required decimal Valor { get; set;}
    public required DateTime Data { get; set;}
    public required TipoTransacao Tipo { get; set;}
    public required string PessoaId { get; set;}
}