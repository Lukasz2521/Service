using EuroSerwis.Infrastructure;
using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Repositories
{
    public class InspectionRepository
    {
        private readonly InspectionContext _context;
        public InspectionRepository(InspectionContext context)
        {
            _context = context;
        }

        public void Add(Inspection inspection)
        {
            _context.Inspections.Add(inspection);
        }
    }
}
