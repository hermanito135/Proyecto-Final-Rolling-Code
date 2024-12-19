using BackendProyectoRollingCode.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendProyectoRollingCode.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductosController : ControllerBase
    {
        private readonly TiendaDbContext _context;

        public ProductosController(TiendaDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductos()
        {
            return Ok(await _context.Productos.ToListAsync());
        }

        private IActionResult Ok(object value)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<IActionResult> AddProducto([FromBody] Producto producto)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProductos), new { id = producto.ID }, producto);
        }
    }

}
