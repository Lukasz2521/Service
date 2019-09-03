using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EuroSerwis.DTO
{
    public class InspectionDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string County { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Phone { get; set; }
    }
}
