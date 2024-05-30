using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace APICatalogo.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Usuario>? Usuarios { get; set; }
}
