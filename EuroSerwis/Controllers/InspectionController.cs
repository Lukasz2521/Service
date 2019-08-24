using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EuroSerwis.DTO;
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

        public InspectionController(IMapper mapper, IInspection inspection)
        {
            _inspection = inspection;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> Add([FromBody]InspectionDTO inspection)
        {
            await _inspection.Add(inspection);

            return StatusCode(200);
        }


        [HttpGet("[action]")]
        public async Task<IEnumerable<InspectionDTO>> Get()
        {
            var inspections = await _inspection.Get();

            return inspections;
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> Update([FromBody]InspectionDTO inspection)
        {
            await _inspection.Update(inspection);

            return Ok();
        }

        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> Remove(int id)
        {
            await _inspection.Remove(id);

            return Ok();
        }
    }
}