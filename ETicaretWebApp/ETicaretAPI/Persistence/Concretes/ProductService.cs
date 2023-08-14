using Application.Abstraction;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts()      
            => new()
               {
                    new () { Id = Guid.NewGuid(), Name = "Product 1", Price = 100, Stock = 10}
               };        
    }
}
