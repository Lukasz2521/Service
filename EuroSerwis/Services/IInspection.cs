using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Services
{
    interface IInspection
    {
        void Add();
        void Remove(int id);
        void Update(Inspection inspection);
    }
}
