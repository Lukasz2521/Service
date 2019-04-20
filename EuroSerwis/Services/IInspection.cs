﻿using EuroSerwis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Services
{
    public interface IInspection
    {
        void Add(Inspection inspection);
        void Remove(int id);
        void Update(Inspection inspection);
    }
}
