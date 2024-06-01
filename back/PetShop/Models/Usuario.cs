using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.EntityFrameworkCore;

namespace PetShop.Models
{
    [Collection("usuarios")]
    public class Usuario
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string? Nome { get; set; }
        public string? Cpf { get; set; }
        public string? Senha { get; set; }
        public string? Email { get; set; }
    }
}
