﻿using EuroSerwis.Infrastructure;
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

        public async Task Update(Inspection inspection)
        {
            try
            {
                var ins =  await _context.Inspections.SingleAsync(i => i.Id == inspection.Id);

                if(ins == null)
                {
                    throw new NullReferenceException();
                }

                ins = inspection;
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _context.Dispose();
            }
        }
    }
}
