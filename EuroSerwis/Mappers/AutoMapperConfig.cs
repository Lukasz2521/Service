using AutoMapper;
using EuroSerwis.DTO;
using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Mappers
{
    public class AutoMapperConfig
    {
        public static IMapper Initialize()
           => new MapperConfiguration(cfg =>
           {
               cfg.CreateMap<InspectionDTO, Inspection>();
               cfg.CreateMap<Inspection, InspectionDTO>();
           })
           .CreateMapper();
    }
}
