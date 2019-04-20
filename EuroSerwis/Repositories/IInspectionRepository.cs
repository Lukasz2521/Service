using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Repositories
{
    public interface IInspectionRepository
    {
        void Add(Inspection inspection);
    }
}
