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
        public async Task<IEnumerable<InspectionDTO>> Get(bool getUpcoming)
        {
            var inspections = getUpcoming ?
                await _inspectionRepository.GetUpcoming() :
                await _inspectionRepository.Get();

            return _mapper.Map<IEnumerable<Inspection>, IEnumerable<InspectionDTO>>(inspections);
        }

        public async Task Add(InspectionDTO inspection)
        {
            await _inspectionRepository.Add(_mapper.Map<InspectionDTO, Inspection>(inspection));
        }


        public async Task Remove(int id)
        {
            await _inspectionRepository.Remove(id);
        }

        public async Task Update(InspectionDTO inspection)
        {
            await _inspectionRepository.Update(_mapper.Map<InspectionDTO, Inspection>(inspection));
        }
    }
}
