using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;
using backend.DTOs;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacoesController : ControllerBase
{
    private readonly AppDbContext _context;

    public TransacoesController(AppDbContext context)
    {
        _context = context;
    }

    // Rotas

    // GET: api/transacoes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Transacao>>> ListarTodos()
    {
        return await _context.Transacoes.Include(t=> t.Pessoa).ToListAsync();
    }

    // POST: api/transacoes
    [HttpPost]
    public async Task<ActionResult<Transacao>> Criar(CriarTransacaoDto dto)
    {
        var pessoaExiste = await _context.Pessoas.AnyAsync(p => p.Id == dto.PessoaId);
        if (!pessoaExiste)
        {
            return NotFound($"Pessoa com ID {dto.PessoaId} não encontrada.");
        }

        var novaTransacao = new Transacao
        {
            Descricao = dto.Descricao,
            Valor = dto.Valor,
            Data = dto.Data,
            Tipo = dto.Tipo,
            PessoaId = dto.PessoaId
        };

        _context.Transacoes.Add(novaTransacao);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(ListarTodos), new { id = novaTransacao.Id }, novaTransacao);
    }

    // PUT: api/transacoes/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> Editar(string id, CriarTransacaoDto dto)
    {
        var transacao = await _context.Transacoes.FindAsync(id);
        if (transacao == null)
        {
            return NotFound($"Transação com ID {id} não encontrada.");
        }
        // Para garantir que a transação seja associada a uma pessoa existente
        var pessoaExiste = await _context.Pessoas.AnyAsync(p => p.Id == dto.PessoaId);
        if (!pessoaExiste)
        {
            return NotFound($"Pessoa com ID {dto.PessoaId} não encontrada.");
        }

        transacao.Descricao = dto.Descricao;
        transacao.Valor = dto.Valor;
        transacao.Data = dto.Data;
        transacao.Tipo = dto.Tipo;
        transacao.PessoaId = dto.PessoaId;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/transacoes/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> Deletar(string id)
    {
        var transacao = await _context.Transacoes.FindAsync(id);
        if (transacao == null)
        {
            return NotFound($"Transação com ID {id} não encontrada.");
        }
        _context.Transacoes.Remove(transacao);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}