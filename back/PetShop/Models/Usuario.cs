using MongoDB.Bson;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PetShop.Models
{
    [Collection("usuarios")]
    public class Usuario
    {
        public ObjectId Id { get; set; }

        [Required(ErrorMessage ="Usuário necessita de um nome!")]
        public string? Nome { get; set; }
        public string? Cpf { get; set; }
        public string? Senha { get; set; }
        public string? Email { get; set; }
    }
}
