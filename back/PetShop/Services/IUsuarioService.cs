using MongoDB.Bson;
using PetShop.Models;

namespace PetShop.Services
{
    public interface IUsuarioService
    {
        IEnumerable<Usuario> GetUsuarios();
        Usuario? GetUsuarioById(ObjectId id);
        Usuario? GetUsuarioByCpf(string cpf);
        void AddUsuario(Usuario usuario);
        void UpdateUsuario(Usuario usuario);
        void DeleteUsuario(Usuario usuario);
        bool Login(LoginDto login);
    }
}
