using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerseApi.Models
{
    public partial class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public string PhoneNo { get; set; }
        public string PassWord { get; set; }
    }
}
