using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly FederationSkatingClubContext _dbContext;

        public CustomerController(FederationSkatingClubContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetCustomers")]
        public IActionResult GetCustomers()
        {
            List<Customer> list = _dbContext.Customers.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }
    }
}

