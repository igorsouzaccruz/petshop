using Microsoft.AspNetCore.Mvc;
using PetShop.Models;
using PetShop.Services;

namespace PetShop.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUsuarioService _usuarioService;

        public AuthController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }
        
        [HttpPost]
        public ActionResult<bool> Post([FromBody] LoginDto login)
        {
            if (login is null)
            {
                return BadRequest();
            }

            bool usuarioAutenticado = _usuarioService.Login(login);

            return Ok(usuarioAutenticado);
        }
    }
}
