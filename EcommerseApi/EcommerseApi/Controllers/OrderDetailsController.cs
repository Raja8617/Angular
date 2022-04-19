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
    public class OrderDetailsController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        // GET: api/<OrderDetailsController>
        [HttpGet]
        public IActionResult Get()
        {
            List<OrderDetail> ob = a.OrderDetails.ToList();
            return Ok(ob);
        }


        [HttpPost]
        public IActionResult post(OrderDetail v)
        {
            if (v == null)
                return BadRequest();
            else
            {
                a.OrderDetails.Add(v);
                a.SaveChanges();
                return Ok();
            }

        }

    }
}
