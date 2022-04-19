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
    public class userController : ControllerBase
    {
        ProjectContext a = new ProjectContext();
        [HttpGet]
        public IActionResult Get()
        {

          
            {
                List<Customer> ob = a.Customers.ToList();
                return Ok(ob);
            }
        }


        [HttpPut]
        public IActionResult update(Customer e)
        {
            if (e != null)
            {
                var obj = a.Customers.Where(model => model.CustomerId == e.CustomerId).FirstOrDefault();
                if (obj == null)
                    return BadRequest();
                else
                {

                    obj.CustomerName = e.CustomerName;
                    obj.Address = e.Address;
                    obj.State = e.State;
                    obj.PinCode = e.PinCode;
                    obj.PassWord = e.PassWord;


                    a.SaveChanges();
                    return Ok();

                }
            }
            else
            { return BadRequest(); }
        }



        [HttpPost]
        public IActionResult post(Customer v)
        {
            var obj = a.Customers.Where(model => model.CustomerId == v.CustomerId).FirstOrDefault();
            if (obj != null)
                return BadRequest();
            
            else
            {
                a.Customers.Add(v);
                a.SaveChanges();
                return Ok();
            }

        }






        // DELETE api/<userController>/5

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            {
                var product = a.Customers.Find(id);
                if (product == null)
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Customer Not Found"
                    });
                }
                else
                {
                    a.Remove(product);
                    a.SaveChanges();
                    return Ok(new
                    {
                        StatusCode = 200,
                        Messege = "User Account Deleted"
                    });
                }

            }

        }
    }
}
