using EuroSerwis.Infrastructure;
using EuroSerwis.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Repositories
{
    public class InspectionRepository: IInspectionRepository
    {
        private readonly InspectionContext _context;
        public InspectionRepository(InspectionContext context)
        {
            _context = context;
        }

        public async Task Add(Inspection inspection)
        {
           await _context.Inspections.AddAsync(inspection);
           await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Inspection>> Get()
        {
            var inspections = await _context.Inspections.ToListAsync();

            return inspections;
        }
    }
}
