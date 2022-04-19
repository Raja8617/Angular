using EcommerseApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommerseApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        // GET: api/<PaymentController>
        [HttpGet]
        public IActionResult Get()
        {

            List<Payment> ob = a.Payments.ToList();
            return Ok(ob);
        }

        // POST api/<PaymentController>
        [HttpPost]
        public IActionResult post(Payment v)
        {
            if (v == null)
                return BadRequest();
            else
            {
                a.Payments.Add(v);
                a.SaveChanges();
                return Ok();
            }

        }

   
       
    }
}
