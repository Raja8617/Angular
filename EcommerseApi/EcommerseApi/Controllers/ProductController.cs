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
    public class ProductController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        [HttpGet]
        public IActionResult Get()
        {
            List<Product> ob = a.Products.ToList();
            return Ok(ob);
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {

            var obj = a.Products.Where(model => model.ProductId == id).FirstOrDefault();
            if (obj == null)
                return NotFound();
            else
                return Ok(obj);
        }

        [HttpPut]
        public IActionResult update(Product e)
        {
            if (e != null)
            {
                var obj = a.Products.Where(model => model.ProductId == e.ProductId).FirstOrDefault();
                if (obj == null)
                    return BadRequest();
                else
                {
                    obj.AvailableQuentity = e.AvailableQuentity;

                    a.SaveChanges();
                    return Ok();

                }
            }
            else
            { return BadRequest(); }
        }




    }
}

