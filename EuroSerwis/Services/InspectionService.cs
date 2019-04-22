using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EuroSerwis.DTO;
using EuroSerwis.Model;
using EuroSerwis.Repositories;

namespace EuroSerwis.Services
{
    public class InspectionService : IInspection
    {
        private readonly IInspectionRepository _inspectionRepository;
        private readonly IMapper _mapper;

        public InspectionService(IInspectionRepository inspectionRepository, IMapper mapper)
        {
            _inspectionRepository = inspectionRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<InspectionDTO>> Get()
        {
            var inspections = await _inspectionRepository.Get();

            return _mapper.Map<IEnumerable<Inspection>, IEnumerable<InspectionDTO>>(inspections);
        }

        public async Task Add(InspectionDTO inspection)
        {
            await _inspectionRepository.Add(_mapper.Map<InspectionDTO, Inspection>(inspection));
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
