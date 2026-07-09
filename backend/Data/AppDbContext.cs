using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AppDbContext : DbContext
{
    // Construtor que recebe as opções de configuração do DbContext
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Pessoa> Pessoas { get; set; }
    public DbSet<Transacao> Transacoes { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuração do relacionamento entre Pessoa e Transacao
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Transacao>()
        .HasOne(t => t.Pessoa) // Define que uma transação tem uma pessoa associada
        .WithMany(p => p.Transacoes) // Define que uma pessoa pode ter muitas transações
        .HasForeignKey(t => t.PessoaId) // Define a chave estrangeira na entidade Transacao
        .OnDelete(DeleteBehavior.Cascade); // Define o comportamento de exclusão em cascata

        modelBuilder.Entity<Transacao>()
        .Property(t => t.Valor)
        .HasConversion<double>(); // Converte o tipo decimal para double no banco de dados
    }

}
