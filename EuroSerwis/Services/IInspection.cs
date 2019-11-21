using EuroSerwis.DTO;
using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Services
{
    public interface IInspection
    {
        Task Add(InspectionDTO inspection);
        Task<IEnumerable<InspectionDTO>> Get(bool getUpcoming);
        Task Remove(int id);
        Task Update(InspectionDTO inspection);
    }
}
