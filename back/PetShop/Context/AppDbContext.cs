using Microsoft.EntityFrameworkCore;
using PetShop.Models;

namespace APICatalogo.Context;

public class AppDbContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Usuario>();
    }
}
