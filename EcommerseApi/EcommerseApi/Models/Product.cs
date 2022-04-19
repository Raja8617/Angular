using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerseApi.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int AvailableQuentity { get; set; }
        public int Price { get; set; }
        public string ProductDescription { get; set; }
        public int? CategoryId { get; set; }
    }
}
