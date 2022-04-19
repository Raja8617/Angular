using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerseApi.Models
{
    public partial class OrderDetail
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}
