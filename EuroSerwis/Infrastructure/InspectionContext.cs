using EuroSerwis.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Infrastructure
{
    public class InspectionContext : DbContext
    {
        public InspectionContext(DbContextOptions<InspectionContext> options) : base(options)
        {

        }

        public DbSet<Inspection> Inspections { get; set; }
    }
}
