using EcommerseApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommerseApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        [HttpGet]
        public IActionResult Get()
        {
            List<Customer> ob = a.Customers.ToList();
            return Ok(ob);
        }

        [HttpPost]
        public IActionResult Get( Customer e)
        {

            var obj = a.Customers.Where(model => (model.PassWord == e.PassWord) &&(model.PhoneNo==e.PhoneNo)).FirstOrDefault();
            if (obj == null)
                return NotFound();
            else
            {
                
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:4200/login",
                    audience: "http://localhost:4200/login",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
                
                


            }
        }


        
       
    }
}
