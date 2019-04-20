using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.Model
{
    public class Inspection
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        public string Address{ get; set; }

        public string County { get; set; }

        public DateTime Date { get; set; }

        public string Phone { get; set; }
    }
}
