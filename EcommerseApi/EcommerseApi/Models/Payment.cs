using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerseApi.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentType { get; set; }
        public string IsDone { get; set; }
    }
}
