using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerseApi.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public int? PaymentId { get; set; }
        public int TotalPrice { get; set; }
        public int? Deleted { get; set; }
    }
}
