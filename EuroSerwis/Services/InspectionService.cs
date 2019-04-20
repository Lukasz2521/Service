using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EuroSerwis.Model;
using EuroSerwis.Repositories;

namespace EuroSerwis.Services
{
    public class InspectionService : IInspection
    {
        private readonly IInspectionRepository _inspectionRepository;

        public InspectionService(IInspectionRepository inspectionRepository)
        {
            _inspectionRepository = inspectionRepository;
        }

        public void Add(Inspection inspection)
        {
            _inspectionRepository.Add(inspection);
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Inspection inspection)
        {
            throw new NotImplementedException();
        }
    }
}
