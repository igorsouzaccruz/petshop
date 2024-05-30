namespace PetShop.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public required string Nome { get; set; }
        public required string Cpf { get; set; }
    }
}
