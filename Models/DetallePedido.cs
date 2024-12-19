namespace BackendProyectoRollingCode.Models
{
    public class DetallePedido
    {
        public int ID { get; set; }
        public int PedidoID { get; set; }
        public Pedido Pedido { get; set; }
        public int ProductoID { get; set; }
        public Producto Producto { get; set; }
        public int Cantidad { get; set; }
        public decimal PrecioUnitario { get; set; }
    }

}
