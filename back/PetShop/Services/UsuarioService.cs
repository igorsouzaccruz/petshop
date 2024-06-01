using APICatalogo.Context;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using PetShop.Models;

namespace PetShop.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly AppDbContext _context;

        public UsuarioService(AppDbContext context)
        {
            _context = context;
        }

        public void AddUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);

            _context.ChangeTracker.DetectChanges();
            _context.SaveChanges();
        }

        public void UpdateUsuario(Usuario usuario)
        {
            var user = _context.Usuarios.FirstOrDefault(u => u.Id == usuario.Id);

            if (user != null)
            {
                user.Nome = usuario.Nome;
                user.Email = usuario.Email;
                user.Cpf = usuario.Cpf;
                user.Senha = usuario.Senha;

                _context.Usuarios.Update(user);

                _context.ChangeTracker.DetectChanges();
                _context.SaveChanges();
            }
            else
            {
                throw new ArgumentException("Esse usuario não pode ser atualizado");
            }
        }

        public void DeleteUsuario(Usuario usuario)
        {
            var user = _context.Usuarios.FirstOrDefault(u => u.Id == usuario.Id);

            if (user != null) {
                _context.Usuarios.Remove(user);
                _context.ChangeTracker.DetectChanges();
                _context.SaveChanges();
            }
            else
            {
                throw new ArgumentException("Esse usuario não pode ser deletado");
            }
        }

        public IEnumerable<Usuario> GetUsuarios()
        {
            return _context.Usuarios.OrderBy(u => u.Id).AsNoTracking().AsEnumerable();
        }

        public Usuario? GetUsuarioById(ObjectId id)
        {
            return _context.Usuarios.FirstOrDefault(u => u.Id == id);
        }

        public bool Login(LoginDto login)
        {
            var user = _context.Usuarios.FirstOrDefault(u => u.Email == login.Login && u.Senha == login.Senha);

            if (user != null)
            {
                return true;
            }

            return false;
        }
    }
}
