using Microsoft.EntityFrameworkCore;
using backend.Data;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Geral", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
   options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers().AddJsonOptions(options =>
    {
        // Converte os enums para strings no JSON 
        // para não precisar ficar usando `0` e `1` nos requests e responses
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        // evita que o .NET entre em loop ao processar a relação entre Pessoa e Transacao
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("Geral");
app.UseAuthorization();
app.MapControllers();


app.MapGet("/", () => "Gerenciador de Despesas");

app.Run();