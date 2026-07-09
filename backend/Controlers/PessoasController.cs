using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;
using backend.DTOs;

namespace backend.Controllers;

// O atributo [ApiController] indica que esta classe é um controlador de API,
// e o atributo [Route("api/[controller]")] define a rota base para os endpoints deste controlador.
[ApiController]
[Route("api/[controller]")]
public class PessoasController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoasController(AppDbContext context)
    {
        _context = context;
    }

    // Rotas

    // GET: api/pessoas
    // Endpoint para listar todas as pessoas e suas respectivas transações
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pessoa>>> ListarTodos()
    {
        // retorna todas as pessoas do banco de dados, incluindo suas transações associadas
        return await _context.Pessoas.Include(p => p.Transacoes).ToListAsync();
    }

    // POST: api/pessoas
    // Endpoint para criar uma nova pessoa. campos `Nome` e `DataNascimento`
    [HttpPost]
    public async Task<ActionResult<Pessoa>> Criar(CriarPessoaDTO dto)
    {
        var novaPessoa = new Pessoa
        {
            Nome = dto.Nome,
            DataNascimento = dto.DataNascimento
        };
        _context.Pessoas.Add(novaPessoa);
        await _context.SaveChangesAsync();

        // Retorna 201 Created
        return CreatedAtAction(nameof(ListarTodos), new {id = novaPessoa.Id}, novaPessoa);
    }

}