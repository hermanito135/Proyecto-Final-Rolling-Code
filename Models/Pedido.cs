namespace BackendProyectoRollingCode.Models
{
    public class Pedido
    {
        public int ID { get; set; }
        public int UsuarioID { get; set; }
        public Usuario Usuario { get; set; }
        public DateTime FechaPedido { get; set; }
        public string Estado { get; set; }
        public ICollection<DetallePedido> Detalles { get; set; }
    }

}
