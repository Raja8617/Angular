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
    public class OrderController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        // GET: api/<OrderController>
        [HttpGet]
        public IActionResult Get()
        {
            List<Order> ob = a.Orders.ToList();
            return Ok(ob);
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var obj = a.Orders.Where(model => model.OrderId == id).FirstOrDefault();
            if (obj == null)
                return NotFound();
            else
                return Ok(obj);
        }

        // POST api/<OrderController>
        [HttpPost]
        public IActionResult post(Order v)
        {
            if (v == null)
                return BadRequest();
            else
            {
                a.Orders.Add(v);
                a.SaveChanges();
                return Ok();
            }

        }

        [HttpPut]
        public IActionResult update(Order e)
        {
            if (e != null)
            {
                var obj = a.Orders.Where(model => model.OrderId == e.OrderId).FirstOrDefault();
                if (obj == null)
                    return BadRequest();
                else
                {
                    obj.Deleted = e.Deleted;

                    a.SaveChanges();
                    return Ok();

                }
            }
            else
            { return BadRequest(); }
        }



    }


}

