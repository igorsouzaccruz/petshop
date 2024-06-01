﻿using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PetShop.DTOs;
using PetShop.Models;
using PetShop.Services;

namespace PetShop.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UsuarioDto>> GetUsuarios()
        {
            var usuarios = _usuarioService.GetUsuarios();
            var usuariosModificados = usuarios.Select(u => new
            {
                Id = u.Id.ToString(),
                u.Email,
                cpf = TratarCPFLGPT(u.Cpf),
                u.Nome,
            });
            return Ok(usuariosModificados);
        }

        [HttpGet("{id}")]
        public ActionResult<UsuarioDto> GetUsuario([FromRoute] ObjectId id) {
            var usuario = _usuarioService.GetUsuarioById(id);

            if (usuario is null)
            {
                return NotFound("Usuario não encontrado...");
            }

            UsuarioDto usuarioModificado  = new UsuarioDto 
            {
                Id = usuario.Id.ToString(), 
                Nome = usuario.Nome, 
                Cpf = TratarCPFLGPT(usuario.Cpf), 
                Email = usuario.Email
            };

            return Ok(usuario);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            if (usuario is null)
            {
                return BadRequest();
            }
            _usuarioService.AddUsuario(usuario);

            return Created();
        }

        [HttpPut]
        public ActionResult Put([FromBody] UsuarioDto usuario)
        {
            if (usuario is null)
            {
                return BadRequest();
            }

            var usuarioParaAtualizar = _usuarioService.GetUsuarioById(ObjectId.Parse(usuario.Id));

            if (usuarioParaAtualizar is null)
            {
                return BadRequest();
            }

            usuarioParaAtualizar.Nome = usuario.Nome;
            usuarioParaAtualizar.Cpf = usuario.Cpf;
            usuarioParaAtualizar.Email = usuario.Email;
            usuarioParaAtualizar.Senha = usuario.Senha;


            _usuarioService.UpdateUsuario(usuarioParaAtualizar);

            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] UsuarioDto usuario)
        {
            if (usuario is null)
            {
                return BadRequest();
            }

            var usuarioParaDeletar = _usuarioService.GetUsuarioById(ObjectId.Parse(usuario.Id));

            if (usuarioParaDeletar is null)
            {
                return BadRequest();
            }

            usuarioParaDeletar.Nome = usuario.Nome;
            usuarioParaDeletar.Cpf = usuario.Cpf;
            usuarioParaDeletar.Email = usuario.Email;
            usuarioParaDeletar.Senha = usuario.Senha;


            _usuarioService.DeleteUsuario(usuarioParaDeletar);

            return Ok();
        }

        private string TratarCPFLGPT(string cpf)
        {
            cpf = new string(cpf.Select((c, index) => index < 3 ? c : '*').ToArray());
            return cpf;
        }
    }
}
