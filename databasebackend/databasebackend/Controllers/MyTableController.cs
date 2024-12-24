using Microsoft.AspNetCore.Mvc;
using DatabaseBackend.Data;
using DatabaseBackend.Models;

namespace DatabaseBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MyTableController : ControllerBase
    {
        private readonly MySqlDbContext _context;

        public MyTableController(MySqlDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _context.MyTable.ToList();
            return Ok(data);
        }
    }
}