using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EuroSerwis.Model;
using EuroSerwis.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EuroSerwis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InspectionController : ControllerBase
    {
        private readonly IInspection _inspection;

        public InspectionController(IInspection inspection)
        {
            _inspection = inspection;
        }

        [HttpPost("[action]")]
        public ActionResult Add([FromBody]Inspection inspection)
        {
            _inspection.Add(inspection);

            return StatusCode(200);
        }


        [HttpGet("[action]")]
        public Inspection Get()
        {
            return new Inspection();
        }
    }
}