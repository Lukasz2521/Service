using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Repositories
{
    public interface IInspectionRepository
    {
        Task Add(Inspection inspection);
        Task<IEnumerable<Inspection>> Get();
        Task Update(Inspection inspection);

        Task Remove(int id);
    }
}
